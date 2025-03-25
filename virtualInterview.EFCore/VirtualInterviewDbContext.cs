using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using virtualInterview.Models.Entities;

namespace virtualInterview.EFCore
{
    public class VirtualInterviewDbContext : DbContext
    {
        public VirtualInterviewDbContext(DbContextOptions<VirtualInterviewDbContext> options) : base(options) { }

        public DbSet<Role> Roles { get; set; }
    }
}
