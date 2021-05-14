using System;
using Features.Core.Helpers;
using MediatR;

namespace Features.Core.Features.Beneficiary.Messages
{
    public class UpdateBeneficiaryCommandRequest: IRequest<ApiResult<UpdateBeneficiaryCommandResponse>>
    {
        public Models.Beneficiary Beneficiary { get; set; }
        public UpdateBeneficiaryCommandRequest()
        {
        }
    }
}
