using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class RequestDetailsController : BaseController<RequestDetail>
    {
        public RequestDetailsController(IRequestDetailService service) : base(service)
        {
        }
    }
}
