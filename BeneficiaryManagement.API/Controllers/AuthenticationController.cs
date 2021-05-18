using System;
using System.Collections.Generic;
using System.Linq;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using BM.common;
using Features.Core.Features.UserManagement.Messages;
using Features.Core.Models;
using MediatR;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using BeneficiaryManagement.API.Helpers;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.ApplicationInsights.DataContracts;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BeneficiaryManagement.API.Controllers
{
    [ApiController]
    [AllowAnonymous]
    [Route("api/[controller]")]
    public class AuthenticationController : BaseController
    {
        private readonly AppSettings _appSettings;
        private readonly TelemetryClient _telemetryClient = new TelemetryClient();

        public AuthenticationController(IConfiguration configuration, IMediator mediator)
            : base(configuration, mediator)
        {
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("login")]        
        public async Task<IActionResult> Post([FromBody] LoginRequest request)
        {
            using (var opTelemery = _telemetryClient.StartOperation<RequestTelemetry>("Login"))
            {
                if (!ModelState.IsValid)
                    return BadRequest();

                var model = new LoginQueryRequest()
                {
                    LoginRequest = request
                };

                var response = await Mediator.Send(model);

                if (response.Data.UserAccount == null)
                    return Unauthorized();

                var user = response.Data.UserAccount;

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(AuthClaim.UserId, user.Id.ToString()),
                    new Claim(AuthClaim.FirstName, user.FirstName),
                    new Claim(AuthClaim.Surname, user.Surname),
                    new Claim(AuthClaim.Username, user.UserName),
                    new Claim(AuthClaim.Role, user.IsAdmin? "Admin": "User")
                };

                var key = Encoding.ASCII.GetBytes(_configuration["SigningKey"]);

                var token = new JwtSecurityToken(
                    _configuration["Issuer"],
                    _configuration["Audience"],
                    claims,
                    notBefore: DateTime.UtcNow,
                    DateTime.UtcNow.AddDays(1),
                    new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                    );

                var tokenValue = new JwtSecurityTokenHandler().WriteToken(token);

                return Ok(new {
                    Id = user.Id,
                    UserName = user.UserName,
                    FirstName = user.FirstName,
                    Surname = user.Surname,
                    Password = user.Password,
                    IsActive = user.IsActive,
                    IsAdmin = user.IsAdmin,
                    token = tokenValue
                });
            }
        }
    }
}
