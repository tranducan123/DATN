using MaterialManagement.Models;
using Microsoft.Extensions.Caching.Memory;

namespace MaterialManagement.Services.Impl
{
    public class CategoryService : BaseService<Category>, ICategoryService
    {
        public CategoryService(MaterialManagementContext context, IMemoryCache cache, IConfiguration configuration) : base(context, cache, configuration)
        {
        }
    }
}
