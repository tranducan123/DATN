using Microsoft.AspNetCore.Mvc;
using MaterialManagement.Models;
using MaterialManagement.Services;
namespace MaterialManagement.Controllers
{
    public class CategoriesController : BaseController<Category>
    {
        public CategoriesController(ICategoryService service) : base(service)
        {
        }
    }
}
