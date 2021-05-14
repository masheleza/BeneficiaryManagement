using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Features.Core.Services
{
    public class ServiceBase<T>: IServiceBase<T>
    {
        public ServiceBase()
        {
        }

        public Task<T> Create(T entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(T entity)
        {
            throw new NotImplementedException();
        }

        public Task<List<T>> Get()
        {
            throw new NotImplementedException();
        }

        public void Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
