using System;
using System.Collections.Generic;

namespace MaterialManagement.Models
{
    public partial class WeeklyTimeTable
    {
        public int Id { get; set; }
        public string? Class { get; set; }
        public string? Subject { get; set; }
        public string? Teacher { get; set; }
        public string? Room { get; set; }
        public string? Timeslot { get; set; }
    }
}
