using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class Department
    {
        public Department()
        {
            Materials = new HashSet<Material>();
            RequestDepartmentRatings = new HashSet<Request>();
            RequestDepartmentReceives = new HashSet<Request>();
            RequestDepartments = new HashSet<Request>();
            Users = new HashSet<User>();
            Warehouses = new HashSet<Warehouse>();
        }

        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; } = null!;
        public string Role { get; set; } = null!;
        public DateTime? CreatedAt { get; set; }

        public virtual ICollection<Material> Materials { get; set; }
        public virtual ICollection<Request> RequestDepartmentRatings { get; set; }
        public virtual ICollection<Request> RequestDepartmentReceives { get; set; }
        public virtual ICollection<Request> RequestDepartments { get; set; }
        public virtual ICollection<User> Users { get; set; }
        public virtual ICollection<Warehouse> Warehouses { get; set; }
    }
}
