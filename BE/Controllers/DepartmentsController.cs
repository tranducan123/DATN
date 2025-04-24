using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class DepartmentsController : BaseController<Department>
    {
        public DepartmentsController(IDepartmentService service) : base(service)
        {
        }
    }
}
