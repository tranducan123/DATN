using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class Supplier
    {
        public Supplier()
        {
            Orders = new HashSet<Order>();
        }

        public int SupplierId { get; set; }
        public string SupplierName { get; set; } = null!;
        public string? ContactPerson { get; set; }
        public string PhoneNumber { get; set; } = null!;
        public string? Email { get; set; }
        public string? Address { get; set; }
        public DateTime? CreatedAt { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
