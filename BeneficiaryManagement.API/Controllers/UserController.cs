using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BM.common;
using Features.Core.Features.UserManagement.Messages;
using Features.Core.Models;
using MediatR;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BeneficiaryManagement.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : BaseController
    {
        private readonly AppSettings _appSettings;
        private readonly TelemetryClient _telemetryClient = new TelemetryClient();

        public UserController(IConfiguration configuration, IMediator mediator)
            :base(configuration, mediator)
        {

        }

        [HttpPost]
        [AllowAnonymous]
        [Route("RegisterUser")]
        public async Task<IActionResult> Post([FromBody] UserAccount user)
        {
            using (var opTelemery = _telemetryClient.StartOperation<RequestTelemetry>("RegisterUser"))
            {
                var model = new AddUserCommandRequest()
                {
                    User = user
                };

                var response = await Mediator.Send(model);
                return HandleResponse(response);
            }
        }

        [HttpPost]
        [Route("GetAllUsers")]
        [Authorize]
        public async Task<IActionResult> GetAll()
        {
            using (var opTelemery = _telemetryClient.StartOperation<RequestTelemetry>("GetAllUsers"))
            {
                var model = new GetUsersQueryRequest() {};

                var response = await Mediator.Send(model);
                return HandleResponse(response);
            }
        }
    }
}
