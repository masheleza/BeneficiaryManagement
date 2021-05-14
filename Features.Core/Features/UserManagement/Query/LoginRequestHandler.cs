using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using BM.common;
using Features.Core.Features.UserManagement.Messages;
using Features.Core.Helpers;
using Features.Core.Repository;
using MediatR;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;

namespace Features.Core.Features.UserManagement.Query
{
    public class LoginRequestHandler: IRequestHandler<LoginQueryRequest, ApiResult<LoginQueryResponse>>
    {
        private readonly TelemetryClient _telemetryClient;
        private readonly BMDatabaseContext _bMDatabase;

        public LoginRequestHandler(BMDatabaseContext bMDatabaseContext)
        {
            _telemetryClient = new TelemetryClient();
            _bMDatabase = bMDatabaseContext;
        }

        public async Task<ApiResult<LoginQueryResponse>> Handle(LoginQueryRequest request, CancellationToken cancellationToken)
        {
            var respnse = new LoginQueryResponse();
            ApiResult<LoginQueryResponse> result = null;

            using(var telemetryOperation = _telemetryClient.StartOperation<RequestTelemetry>($"Handle {nameof(LoginQueryRequest)}"))
            {
                try
                {
                    var user = _bMDatabase.UserAccounts.Where(x => x.UserName.ToLowerInvariant() == request.LoginRequest.Username.ToLowerInvariant()
                                && x.Password == request.LoginRequest.Password).FirstOrDefault();

                    if (user != null)
                    {
                        respnse.UserAccount = user;

                        result = new ApiResult<LoginQueryResponse>()
                        {
                            Data = respnse,
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
                    result = new ApiResult<LoginQueryResponse>()
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
