using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class WarehouseReportsController : BaseController<WarehouseReport>
    {
        public WarehouseReportsController(IWarehouseResponseService service) : base(service)
        {
        }
    }
}
