using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class Material
    {
        public Material()
        {
            InventoryTransactions = new HashSet<InventoryTransaction>();
            OrderDetails = new HashSet<OrderDetail>();
            RequestDetails = new HashSet<RequestDetail>();
            WarehouseReports = new HashSet<WarehouseReport>();
        }

        public int MaterialId { get; set; }
        public string MaterialName { get; set; } = null!;
        public int CategoryId { get; set; }
        public string? Unit { get; set; }
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public int? WarehouseId { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public DateTime? CreatedAt { get; set; }
        public int? DepartmentId { get; set; }

        public virtual Category Category { get; set; } = null!;
        public virtual Department? Department { get; set; }
        public virtual Warehouse? Warehouse { get; set; }
        public virtual ICollection<InventoryTransaction> InventoryTransactions { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
        public virtual ICollection<RequestDetail> RequestDetails { get; set; }
        public virtual ICollection<WarehouseReport> WarehouseReports { get; set; }
    }
}
