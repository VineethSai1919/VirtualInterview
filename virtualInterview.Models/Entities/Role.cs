using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace virtualInterview.Models.Entities
{
    public class Role : AuditColumns
    {
        public string PKRoleId { get; set; }
        public string RoleName { get; set; }
    }
}
