using MaterialManagement.Models;
using Microsoft.Extensions.Caching.Memory;

namespace MaterialManagement.Services.Impl
{
    public class CommoncategoryService : BaseService<Commoncategory>, ICommoncategoryService
    {
        public CommoncategoryService(MaterialManagementContext context, IMemoryCache cache, IConfiguration configuration) : base(context, cache, configuration)
        {
        }
    }
}
