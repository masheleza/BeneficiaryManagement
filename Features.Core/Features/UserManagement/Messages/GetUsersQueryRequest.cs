using System;
using Features.Core.Helpers;
using MediatR;

namespace Features.Core.Features.UserManagement.Messages
{
    public class GetUsersQueryRequest: IRequest<ApiResult<GetUserQueryResponse>>
    {
        public GetUsersQueryRequest()
        {
        }
    }
}
