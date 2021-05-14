using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Features.Core.Services
{
    public interface IServiceBase<T>
    {
        Task<T> Create(T entity);
        void Update(T entity);
        void Delete(T entity);
        Task<List<T>> Get();
    }
}
