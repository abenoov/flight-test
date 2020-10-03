using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightAPI.Models
{
    public class FlightDBContext:DbContext
    {
        public FlightDBContext(DbContextOptions<FlightDBContext> options):base(options) 
        { 
            
        }

        public DbSet<Flight> Flights { get; set; }
    }
}
