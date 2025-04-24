using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class RolesController : BaseController<Role>
    {
        public RolesController(IRoleService service) : base(service)
        {
        }
    }
}
