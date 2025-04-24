using MaterialManagement.Models;
using MaterialManagement.Services;
using MaterialManagement.Services.Impl;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class CommoncategoriesController : BaseController<Commoncategory>
    {
        public CommoncategoriesController(ICommoncategoryService service) : base(service)
        {
        }
    }
}
