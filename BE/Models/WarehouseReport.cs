using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class WarehouseReport
    {
        public int ReportId { get; set; }
        public int WarehouseId { get; set; }
        public int MaterialId { get; set; }
        public int StockQuantity { get; set; }
        public DateTime? ReportDate { get; set; }

        public virtual Material Material { get; set; } = null!;
        public virtual Warehouse Warehouse { get; set; } = null!;
    }
}
