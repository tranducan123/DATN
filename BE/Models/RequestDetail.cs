using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class RequestDetail
    {
        public int RequestDetailId { get; set; }
        public int RequestId { get; set; }
        public int MaterialId { get; set; }
        public int Quantity { get; set; }
        public string? MaterialText { get; set; }
        public string ? Measure {  get; set; }
        public string ? Note { get; set; }
        public virtual Material Material { get; set; } = null!;
        public virtual Request Request { get; set; } = null!;
    }
}
