using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace virtualInterview.Models.Entities
{
    public class Role : AuditColumns
    {
        [Key]
        public string PKRoleId { get; set; }
        public string RoleName { get; set; }
    }
}
