using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using BM.common;
using Features.Core.Features.UserManagement.Messages;
using Features.Core.Helpers;
using Features.Core.Repository;
using MediatR;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;

namespace Features.Core.Features.UserManagement.Command
{
    public class AddUserCommandHandler : IRequestHandler<AddUserCommandRequest, ApiResult<UserAddCommandResponse>>
    {
        private readonly TelemetryClient _telemetryClient;
        private readonly BMDatabaseContext _bMDatabase;
        public AddUserCommandHandler(BMDatabaseContext bMDatabaseContext)
        {
            _telemetryClient = new TelemetryClient();
            _bMDatabase = bMDatabaseContext;
        }

        public async Task<ApiResult<UserAddCommandResponse>> Handle(AddUserCommandRequest request, CancellationToken cancellationToken)
        {
            ApiResult<UserAddCommandResponse> result = null;

            using (var telemetryOperation = _telemetryClient.StartOperation<RequestTelemetry>($"Handle {nameof(AddUserCommandRequest)}"))
            {
                try
                {
                    await _bMDatabase.UserAccounts.AddAsync(request.User);
                    _bMDatabase.SaveChanges();
                    result = new ApiResult<UserAddCommandResponse>()
                    {
                        Success = true,
                    };
                }
                catch (Exception ex)
                {
                    var errorList = new List<CustomErrorHandler>();
                    errorList.Add(new CustomErrorHandler(ex.Message, ex.Source));
                    _telemetryClient.TrackException(ex, new Dictionary<string, string> { { ex.Message, ex.InnerException.ToString() } });
                    result = new ApiResult<UserAddCommandResponse>()
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