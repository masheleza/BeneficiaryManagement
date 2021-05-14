using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BM.common;
using Features.Core.Helpers;
using Features.Core.Repository;
using MediatR;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BeneficiaryManagement.API.Controllers
{
    public class BaseController : Controller
    {
        private static readonly Lazy<IEnumerable<CustomErrorHandler>> _nullModelError =
            new Lazy<IEnumerable<CustomErrorHandler>>(() =>
            new List<CustomErrorHandler> {
                new CustomErrorHandler("Model cannot be null")
            });

        private readonly TelemetryClient _telemetryClient;
        protected readonly IConfiguration _configuration;

        public BMDatabaseContext DbContext { get; }
        public IMediator Mediator { get; }

        public BaseController(IConfiguration configuration, IMediator mediator, BMDatabaseContext bMDatabaseContext = null)
        {
            _configuration = configuration;
            Mediator = mediator;
            DbContext = bMDatabaseContext;
        }

        protected virtual IActionResult ModelNullError()
        {
            return BadRequest(_nullModelError);
        }

        public IActionResult HandleResponse<T>(ApiResult<T> result)
        {
            switch (result.Success)
            {
                case true:
                    return Ok(result);
                default:
                    return BadRequest(result);
            }            
        }
    }
}
