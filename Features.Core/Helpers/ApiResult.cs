using System;
using System.Collections.Generic;
using BM.common;
using Features.Core.Features.Beneficiary.Messages;

namespace Features.Core.Helpers
{
    public class ApiResult<T>
    {
        public T Data { get; set; }
        public bool Success { get; set; }
        public List<CustomErrorHandler> ErrorList { get; set; }

        public ApiResult()
        {
            ErrorList = new List<CustomErrorHandler>();
        }

        public static implicit operator ApiResult<T>(ApiResult<GetBeneficiariesQueryResponse> v)
        {
            throw new NotImplementedException();
        }
    }
}
