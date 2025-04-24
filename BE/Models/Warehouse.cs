using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class Warehouse
    {
        public Warehouse()
        {
            InventoryTransactions = new HashSet<InventoryTransaction>();
            Materials = new HashSet<Material>();
            WarehouseReports = new HashSet<WarehouseReport>();
        }

        public int WarehouseId { get; set; }
        public string WarehouseName { get; set; } = null!;
        public int DepartmentId { get; set; }
        public string Location { get; set; } = null!;
        public DateTime? CreatedAt { get; set; }

        public virtual Department Department { get; set; } = null!;
        public virtual ICollection<InventoryTransaction> InventoryTransactions { get; set; }
        public virtual ICollection<Material> Materials { get; set; }
        public virtual ICollection<WarehouseReport> WarehouseReports { get; set; }
    }
}
