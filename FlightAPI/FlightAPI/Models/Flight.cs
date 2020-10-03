using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FlightAPI.Models
{
    public class Flight
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string flightName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string fromCity { get; set; }

        public DateTime fromTimeDate { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string toCity { get; set; }

        public DateTime toTimeDate { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string status { get; set; }

        public int delay { get; set; }
    }
}
