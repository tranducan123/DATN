using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class Request
    {
        public Request()
        {
            InventoryTransactions = new HashSet<InventoryTransaction>();
            RequestDetails = new HashSet<RequestDetail>();
        }

        public int RequestId { get; set; } //2 
        public string RequestType { get; set; } = null!; //MUA_HANG , XUAT_KHO
        public DateTime? RequestDate { get; set; } //1
        public string? Status { get; set; } // PEDING, REJECTED - DANG TONG HOP, COMPLETED - DA TONG HOP 

        public int? StatusSummary { get; set; }  //4 status . 0 chưa xử lý , 1 đã xử lý

        public int CreatedBy { get; set; }
        public int? ApprovedBy { get; set; } /// CAN BO TONG HOP 
        public int DepartmentId { get; set; }
        public string? Notes { get; set; }

        public string? NoteSummary { get; set; } //NOTE 

        public string? Name { get; set; } //3 
        public int? DepartmentReceiveId { get; set; } // PHONG BAN TONG HOP 
        public int? DepartmentRatingId { get; set; }

        public virtual User? ApprovedByNavigation { get; set; }
        public virtual User CreatedByNavigation { get; set; } = null!;
        public virtual Department Department { get; set; } = null!;
        public virtual Department? DepartmentRating { get; set; }
        public virtual Department? DepartmentReceive { get; set; }
        public virtual Order? Order { get; set; }
        public virtual ICollection<InventoryTransaction> InventoryTransactions { get; set; }
        public virtual ICollection<RequestDetail> RequestDetails { get; set; }
    }
}
