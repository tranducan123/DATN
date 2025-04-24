using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class Commoncategory
    {
        public Commoncategory()
        {
            InverseParent = new HashSet<Commoncategory>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Code { get; set; }
        public int? Type { get; set; }
        public int? Parentid { get; set; }

        public virtual Commoncategory? Parent { get; set; }
        public virtual ICollection<Commoncategory> InverseParent { get; set; }
    }
}
