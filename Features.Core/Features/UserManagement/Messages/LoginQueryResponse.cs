using System;
using Features.Core.Models;

namespace Features.Core.Features.UserManagement.Messages
{
    public class LoginQueryResponse
    {
        public UserAccount UserAccount { get; set; }        
    }
}
