using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class Category
    {
        public Category()
        {
            Materials = new HashSet<Material>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = null!;
        public string Type { get; set; } = null!;
        public DateTime? CreatedAt { get; set; }
        public string? Description { get; set; }

        public virtual ICollection<Material> Materials { get; set; }
    }
}
