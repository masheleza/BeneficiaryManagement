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
    public class UpdateBeneficiaryCommandHandler: IRequestHandler<UpdateBeneficiaryCommandRequest, ApiResult<UpdateBeneficiaryCommandResponse>>
    {
        private readonly TelemetryClient _telemetryClient;
        private readonly BMDatabaseContext _bMDatabase;

        public UpdateBeneficiaryCommandHandler(BMDatabaseContext bMDatabaseContext)
        {
            _telemetryClient = new TelemetryClient();
            _bMDatabase = bMDatabaseContext;
        }

        public async Task<ApiResult<UpdateBeneficiaryCommandResponse>> Handle(UpdateBeneficiaryCommandRequest request, CancellationToken cancellationToken)
        {
            ApiResult<UpdateBeneficiaryCommandResponse> result = null;

            using (var telemetryOperation = _telemetryClient.StartOperation<RequestTelemetry>($"Handle {nameof(UpdateBeneficiaryCommandRequest)}"))
            {
                try
                {
                    _bMDatabase.Beneficiaries.Update(request.Beneficiary);
                    result = new ApiResult<UpdateBeneficiaryCommandResponse>()
                    {
                        Success = true,
                    };
                }
                catch (Exception ex)
                {
                    var errorList = new List<CustomErrorHandler>();
                    errorList.Add(new CustomErrorHandler(ex.Message, ex.Source));
                    _telemetryClient.TrackException(ex, new Dictionary<string, string> { { ex.Message, ex.InnerException.ToString() } });
                    result = new ApiResult<UpdateBeneficiaryCommandResponse>()
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
