using MaterialManagement.Models;
using MaterialManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace MaterialManagement.Controllers
{
    public class InventoryTransactionsController : BaseController<InventoryTransaction>
    {
        public InventoryTransactionsController(IInventoryTransactionService service) : base(service)
        {
        }
    }
}
