using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int OrderId { get; set; }
        public int RequestId { get; set; }
        public int SupplierId { get; set; }
        public DateTime? OrderDate { get; set; }
        public string? Status { get; set; }
        public int CreatedBy { get; set; }
        public int? ApprovedBy { get; set; }

        public virtual User? ApprovedByNavigation { get; set; }
        public virtual User CreatedByNavigation { get; set; } = null!;
        public virtual Request Request { get; set; } = null!;
        public virtual Supplier Supplier { get; set; } = null!;
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
