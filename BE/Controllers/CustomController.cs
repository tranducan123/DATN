using MaterialManagement.Controllers.Helper;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class CustomController : Controller
    {
        private IAuthenticationService authenticationService;

        public CustomController(IAuthenticationService authenticationService)
        {
            this.authenticationService = authenticationService;
        }
        [AllowAnonymous]
        [HttpPost]
        [Route("Authentication/Login")]
        public ActionResult Login([FromBody] UserLogin userLogin)
        {
            return Ok(authenticationService.Login(userLogin.Username, userLogin.Password));
        }
    }
}
