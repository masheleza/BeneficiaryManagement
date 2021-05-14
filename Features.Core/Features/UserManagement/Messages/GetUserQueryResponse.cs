using System;
using System.Collections.Generic;
using Features.Core.Models;

namespace Features.Core.Features.UserManagement.Messages
{
    public class GetUserQueryResponse
    {
        public List<UserAccount> UsersList { get; set; }
        public GetUserQueryResponse()
        {
            UsersList = new List<UserAccount>();
        }
    }
}
