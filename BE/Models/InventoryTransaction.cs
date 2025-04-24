using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class InventoryTransaction
    {
        public int TransactionId { get; set; }
        public int MaterialId { get; set; }
        public int WarehouseId { get; set; }
        public int Quantity { get; set; }
        public string TransactionType { get; set; } = null!;
        public int? RelatedRequestId { get; set; }
        public DateTime? CreatedAt { get; set; }

        public virtual Material Material { get; set; } = null!;
        public virtual Request? RelatedRequest { get; set; }
        public virtual Warehouse Warehouse { get; set; } = null!;
    }
}
