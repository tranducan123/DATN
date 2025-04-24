using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class UserRolesController : BaseController<UserRole>
    {
        public UserRolesController(IUserRoleService service) : base(service)
        {
        }
    }
}
