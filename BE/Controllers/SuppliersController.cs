using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class SuppliersController : BaseController<Supplier>
    {
        public SuppliersController(ISupplier service) : base(service)
        {
        }
    }
}
