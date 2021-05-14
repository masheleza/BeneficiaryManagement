using System;
using Features.Core.Helpers;
using MediatR;

namespace Features.Core.Features.Beneficiary.Messages
{
    public class GetBeneficiariesQueryRequest: IRequest<ApiResult<GetBeneficiariesQueryResponse>>
    {
        public int UserId { get; set; }
        public GetBeneficiariesQueryRequest()
        {
        }
    }
}
