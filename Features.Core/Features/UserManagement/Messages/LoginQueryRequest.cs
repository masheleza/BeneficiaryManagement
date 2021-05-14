using System;
using Features.Core.Helpers;
using Features.Core.Models;
using MediatR;

namespace Features.Core.Features.UserManagement.Messages
{
    public class LoginQueryRequest : IRequest<ApiResult<LoginQueryResponse>>
    {
        public LoginRequest LoginRequest { get; set; }
        public LoginQueryRequest()
        {
        }
    }
}
