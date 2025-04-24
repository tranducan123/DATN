using MaterialManagement.Models;
using Microsoft.Extensions.Caching.Memory;

namespace MaterialManagement.Services.Impl
{
    public class WarehouseService : BaseService<Warehouse>, IWarehouseService
    {
        public WarehouseService(MaterialManagementContext context, IMemoryCache cache, IConfiguration configuration) : base(context, cache, configuration)
        {
        }
    }
}
