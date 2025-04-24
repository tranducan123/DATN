using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class MaterialsController : BaseController<Material>
    {
        public MaterialsController(IMaterialService service) : base(service)
        {
        }
    }
}
