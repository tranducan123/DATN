using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class WarehousesController : BaseController<Warehouse>
    {
        public WarehousesController(IWarehouseService service) : base(service)
        {
        }
    }
}
