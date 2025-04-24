using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class UsersController : BaseController<User>
    {
        public UsersController(IUserService service) : base(service)
        {
        }
    }
}
