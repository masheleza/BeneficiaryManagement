using System;
using MediatR;
using Features.Core.Helpers;
using Features.Core.Models;
using Features.Core.Features.Beneficiary.Messages;
using BM.common;
using System.Threading.Tasks;
using System.Threading;
using Features.Core.Repository;
using Microsoft.ApplicationInsights;
using System.Collections.Generic;
using Microsoft.ApplicationInsights.DataContracts;
using System.Linq;

namespace Features.Core.Features.Beneficiary.Query
{
    public class GetBeneficiariesQueryHandler : IRequestHandler<GetBeneficiariesQueryRequest, ApiResult<GetBeneficiariesQueryResponse>>
    {
        private readonly TelemetryClient _telemetryClient;
        private readonly BMDatabaseContext _bMDatabase;

        public GetBeneficiariesQueryHandler(BMDatabaseContext bMDatabaseContext)
        {
            _telemetryClient = new TelemetryClient();
            _bMDatabase = bMDatabaseContext;
        }

        public async Task<ApiResult<GetBeneficiariesQueryResponse>> Handle(GetBeneficiariesQueryRequest request, CancellationToken cancellationToken)
        {
            var response = new GetBeneficiariesQueryResponse();
            ApiResult<GetBeneficiariesQueryResponse> result = null;

            using (var telemetryOperation = _telemetryClient.StartOperation<RequestTelemetry>($"Handle {nameof(GetBeneficiariesQueryRequest)}"))
            {
                try
                {
                    var beneficiaries = _bMDatabase.Beneficiaries.Where(x => x.MainMemberId == request.UserId).ToList();

                    if (beneficiaries.Any())
                    {
                        response.Beneficiaries = beneficiaries;
                        result = new ApiResult<GetBeneficiariesQueryResponse>()
                        {
                            Data = response,
                            Success = true,
                            ErrorList = null
                        };
                    }
                }
                catch (Exception ex)
                {
                    var errorList = new List<CustomErrorHandler>();
                    errorList.Add(new CustomErrorHandler(ex.Message, ex.Source));
                    _telemetryClient.TrackException(ex, new Dictionary<string, string> { { ex.Message, ex.InnerException.ToString() } });
                    result = new ApiResult<GetBeneficiariesQueryResponse>()
                    {
                        Success = false,
                        ErrorList = errorList
                    };
                }
                finally
                {
                    _telemetryClient.StopOperation(telemetryOperation);
                }

                return result;
            }
        }
    }
}
