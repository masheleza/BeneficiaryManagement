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
    public class DeleteBeneficiaryCommandHandler: IRequestHandler<DeleteBeneficiaryCommandRequest, ApiResult<DeleteBeneficiaryCommandResponse>>
    {
        private readonly TelemetryClient _telemetryClient;
        private readonly BMDatabaseContext _bMDatabase;

        public DeleteBeneficiaryCommandHandler(BMDatabaseContext bMDatabaseContext)
        {
            _telemetryClient = new TelemetryClient();
            _bMDatabase = bMDatabaseContext;
        }

        public async Task<ApiResult<DeleteBeneficiaryCommandResponse>> Handle(DeleteBeneficiaryCommandRequest request, CancellationToken cancellationToken)
        {
            ApiResult<DeleteBeneficiaryCommandResponse> result = null;

            using (var telemetryOperation = _telemetryClient.StartOperation<RequestTelemetry>($"Handle {nameof(UpdateBeneficiaryCommandRequest)}"))
            {
                try
                {
                    _bMDatabase.Beneficiaries.Remove(request.Beneficiary);
                    _bMDatabase.SaveChanges();
                    result = new ApiResult<DeleteBeneficiaryCommandResponse>()
                    {
                        Success = true,
                    };
                }
                catch (Exception ex)
                {
                    var errorList = new List<CustomErrorHandler>();
                    errorList.Add(new CustomErrorHandler(ex.Message, ex.Source));
                    _telemetryClient.TrackException(ex, new Dictionary<string, string> { { ex.Message, ex.InnerException.ToString() } });
                    result = new ApiResult<DeleteBeneficiaryCommandResponse>()
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
