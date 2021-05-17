using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using BM.common;
using Features.Core.Features.Beneficiary.Messages;
using Features.Core.Helpers;
using Features.Core.Repository;
using MediatR;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;

namespace Features.Core.Features.Beneficiary.Command
{
    public class AddBeneficiaryCommandHandler: IRequestHandler<AddBeneficiaryCommandRequest,ApiResult<AddBeneficiaryCommandResponse>>
    {
        private readonly TelemetryClient _telemetryClient;
        private readonly BMDatabaseContext _bMDatabase;
        public AddBeneficiaryCommandHandler(BMDatabaseContext bMDatabaseContext)
        {
            _telemetryClient = new TelemetryClient();
            _bMDatabase = bMDatabaseContext;
        }

        public async Task<ApiResult<AddBeneficiaryCommandResponse>> Handle(AddBeneficiaryCommandRequest request, CancellationToken cancellationToken)
        {
            ApiResult<AddBeneficiaryCommandResponse> result = null;

            using (var telemetryOperation = _telemetryClient.StartOperation<RequestTelemetry>($"Handle {nameof(AddBeneficiaryCommandRequest)}"))
            {
                try
                {
                    await _bMDatabase.Beneficiaries.AddAsync(request.Beneficiary);
                    _bMDatabase.SaveChanges();
                    result = new ApiResult<AddBeneficiaryCommandResponse>()
                    {
                        Success = true,
                    };
                }
                catch (Exception ex)
                {
                    var errorList = new List<CustomErrorHandler>();
                    errorList.Add(new CustomErrorHandler(ex.Message, ex.Source));
                    _telemetryClient.TrackException(ex, new Dictionary<string, string> { { ex.Message, ex.InnerException.ToString() } });
                    result = new ApiResult<AddBeneficiaryCommandResponse>()
                    {
                        Success = false,
                        ErrorList = errorList
                    };
                }
                finally
                {
                    _telemetryClient.StopOperation(telemetryOperation);
                }
            }
            return result;            
        }
    }
}
