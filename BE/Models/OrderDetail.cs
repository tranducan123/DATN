using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class OrderDetail
    {
        public int OrderDetailId { get; set; }
        public int OrderId { get; set; }
        public int MaterialId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }

        public virtual Material Material { get; set; } = null!;
        public virtual Order Order { get; set; } = null!;
    }
}
