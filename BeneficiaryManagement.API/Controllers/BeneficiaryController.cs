using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BM.common;
using MediatR;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Features.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.ApplicationInsights.DataContracts;
using Features.Core.Features.Beneficiary.Messages;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BeneficiaryManagement.API.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class BeneficiaryController : BaseController
    {
        private readonly AppSettings _appSettings;
        private readonly TelemetryClient _telemetryClient = new TelemetryClient();

        public BeneficiaryController(IConfiguration configuration, IMediator mediator)
            : base(configuration, mediator)
        {

        }

        [HttpPost]
        [Route("AddBeneficiary")]
        public async Task<IActionResult> Post([FromBody] Beneficiary beneficiary)
        {
            using (var opTelemery = _telemetryClient.StartOperation<RequestTelemetry>("AddBeneficiary"))
            {
                if (!ModelState.IsValid)
                    return BadRequest();

                var model = new AddBeneficiaryCommandRequest()
                {
                    Beneficiary = beneficiary
                };

                var response = await Mediator.Send(model);
                return HandleResponse(response);
            }               
        }

        [HttpPut]
        [Route("UpdateBeneficiary")]
        public async Task<IActionResult> Put([FromBody] Beneficiary beneficiary)
        {
            using (var opTelemery = _telemetryClient.StartOperation<RequestTelemetry>("UpdateBeneficiary"))
            {
                if (!ModelState.IsValid && beneficiary.Id == 0)
                    return BadRequest();

                var model = new UpdateBeneficiaryCommandRequest()
                {
                    Beneficiary = beneficiary
                };

                var response = await Mediator.Send(model);
                return HandleResponse(response);
            }            
        }

        [HttpDelete]
        [Route("RemoveBeneficiary")]        
        public async Task<IActionResult> Delete([FromBody] Beneficiary beneficiary)
        {
            using (var opTelemery = _telemetryClient.StartOperation<RequestTelemetry>("RemoveBeneficiary"))
            {
                if (!ModelState.IsValid && beneficiary.Id == 0)
                    return BadRequest();

                var model = new DeleteBeneficiaryCommandRequest()
                {
                    Beneficiary = beneficiary
                };

                var response = await Mediator.Send(model);
                return HandleResponse(response);
            }
        }

        [HttpGet]
        [Route("GetBeneficiaries")]       
        public async Task<IActionResult> Get([FromBody] UserAccount user)
        {
            using (var opTelemery = _telemetryClient.StartOperation<RequestTelemetry>("GetBeneficiaries"))
            {
                if (user?.Id == 0)
                    return BadRequest();

                var model = new GetBeneficiariesQueryRequest()
                {
                    UserId = user.Id
                };

                var response = await Mediator.Send(model);
                return HandleResponse(response);
            }
        }

        [HttpGet]
        [Route("GetAllBeneficiaries")]
        public async Task<IActionResult> GetAll()
        {
            using (var opTelemery = _telemetryClient.StartOperation<RequestTelemetry>("GetAllBeneficiaries"))
            {
                var model = new GetBeneficiariesQueryRequest()
                {
                    UserId = 0
                };

                var response = await Mediator.Send(model);
                return HandleResponse(response);
            }
        }
    }
}
