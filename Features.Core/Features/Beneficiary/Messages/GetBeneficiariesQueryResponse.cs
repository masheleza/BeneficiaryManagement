using System;
using Features.Core.Models;
using System.Collections.Generic;
namespace Features.Core.Features.Beneficiary.Messages
{
    public class GetBeneficiariesQueryResponse
    {
        public List<Models.Beneficiary> Beneficiaries { get; set; }
        public GetBeneficiariesQueryResponse()
        {
            Beneficiaries = new List<Models.Beneficiary>();
        }
    }
}
