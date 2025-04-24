using MaterialManagement.Models;
using Microsoft.Extensions.Caching.Memory;

namespace MaterialManagement.Services.Impl
{
    public class InventoryService : BaseService<InventoryTransaction>, IInventoryTransactionService
    {
        public InventoryService(MaterialManagementContext context, IMemoryCache cache, IConfiguration configuration) : base(context, cache, configuration)
        {
        }
    }
}
