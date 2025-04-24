using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class User
    {
        public User()
        {
            OrderApprovedByNavigations = new HashSet<Order>();
            OrderCreatedByNavigations = new HashSet<Order>();
            RequestApprovedByNavigations = new HashSet<Request>();
            RequestCreatedByNavigations = new HashSet<Request>();
            UserRoles = new HashSet<UserRole>();
        }

        public int UserId { get; set; }
        public string Username { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;
        public string FullName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string? PhoneNumber { get; set; }
        public DateTime? CreatedAt { get; set; }
        public bool? Status { get; set; }
        public bool? Gender { get; set; }
        public int? DepartmentId { get; set; }

        public virtual Department? Department { get; set; }
        public virtual ICollection<Order> OrderApprovedByNavigations { get; set; }
        public virtual ICollection<Order> OrderCreatedByNavigations { get; set; }
        public virtual ICollection<Request> RequestApprovedByNavigations { get; set; }
        public virtual ICollection<Request> RequestCreatedByNavigations { get; set; }
        public virtual ICollection<UserRole> UserRoles { get; set; }
    }
}
