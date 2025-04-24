using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class RequestsController : BaseController<Request>
    {
        public RequestsController(IRequestService service) : base(service)
        {
        }
    }
}
