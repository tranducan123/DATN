using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class OrderDetailsController : BaseController<OrderDetail>
    {
        public OrderDetailsController(IOrderDetailService service) : base(service)
        {
        }
    }
}
