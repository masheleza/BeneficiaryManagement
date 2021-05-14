using System;
using Features.Core.Helpers;
using MediatR;

namespace Features.Core.Features.Beneficiary.Messages
{
    public class DeleteBeneficiaryCommandRequest: IRequest<ApiResult<DeleteBeneficiaryCommandResponse>>
    {
        public Models.Beneficiary Beneficiary { get; set; }
        public DeleteBeneficiaryCommandRequest()
        {
        }
    }
}
