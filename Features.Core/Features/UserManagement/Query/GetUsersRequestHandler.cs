using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using BM.common;
using Features.Core.Features.UserManagement.Messages;
using Features.Core.Helpers;
using Features.Core.Models;
using Features.Core.Repository;
using MediatR;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;

namespace Features.Core.Features.UserManagement.Query
{
    public class GetUsersRequestHandler : IRequestHandler<GetUsersQueryRequest, ApiResult<GetUserQueryResponse>>
    {
        private readonly TelemetryClient _telemetryClient;
        private readonly BMDatabaseContext _bMDatabase;

        public GetUsersRequestHandler(BMDatabaseContext bMDatabaseContext)
        {
            _telemetryClient = new TelemetryClient();
            _bMDatabase = bMDatabaseContext;
        }

        public async Task<ApiResult<GetUserQueryResponse>> Handle(GetUsersQueryRequest request, CancellationToken cancellationToken)
        {
            var response = new GetUserQueryResponse();
            ApiResult<GetUserQueryResponse> result = null;

            using (var telemetryOperation = _telemetryClient.StartOperation<RequestTelemetry>($"Handle {nameof(GetUsersQueryRequest)}"))
            {
                try
                {
                    var users = _bMDatabase.UserAccounts.ToList();

                    if (users != null)
                    {
                        response.UsersList = users;
                        result = new ApiResult<GetUserQueryResponse>()
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
                    result = new ApiResult<GetUserQueryResponse>()
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