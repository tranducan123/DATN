using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class OrdersController : BaseController<Order>
    {
        public OrdersController(IOrderService service) : base(service)
        {
        }
    }
}
