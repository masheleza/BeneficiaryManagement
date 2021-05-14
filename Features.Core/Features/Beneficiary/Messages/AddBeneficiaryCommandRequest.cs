using System;
using Features.Core.Helpers;
using Features.Core.Models;
using MediatR;

namespace Features.Core.Features.Beneficiary.Messages
{
    public class AddBeneficiaryCommandRequest : IRequest<ApiResult<AddBeneficiaryCommandResponse>>
    {
        public Models.Beneficiary Beneficiary { get; set; }
        public AddBeneficiaryCommandRequest()
        {
        }
    }
}
