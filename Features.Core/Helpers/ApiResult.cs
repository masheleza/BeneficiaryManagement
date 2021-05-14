using System;
using System.Collections.Generic;
using BM.common;

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
    }
}
