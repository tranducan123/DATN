using MaterialManagement.Models;
using Microsoft.Extensions.Caching.Memory;

namespace MaterialManagement.Services.Impl
{
    public class DepartmentService : BaseService<Department>, IDepartmentService
    {
        public DepartmentService(MaterialManagementContext context, IMemoryCache cache, IConfiguration configuration) : base(context, cache, configuration)
        {
        }
    }
}
