using System;
using Features.Core.Helpers;
using Features.Core.Models;
using MediatR;

namespace Features.Core.Features.UserManagement.Messages
{
    public class AddUserCommandRequest: IRequest<ApiResult<UserAddCommandResponse>>
    {
        public UserAccount User { get; set; }
        public AddUserCommandRequest()
        {
        }
    }
}
