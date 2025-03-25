using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using virtualInterview.EFCore;
using virtualInterview.Models.Entities;

namespace virtualInterview.Repository.RolesRepositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly VirtualInterviewDbContext _context;

        public RoleRepository(VirtualInterviewDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Role>> GetAllRoles()
        {
            // Retrieve all roles from the database where IsDelete is false
            return new List<Role>();
        }

        public async Task<Role> GetRoleById(string roleId)
        {
            // Fetch a role by ID where IsDelete is false
            return new Role();
        }

        public async Task AddRole(Role role)
        {
            // Set CreatedOn, IsActive, and save role to the database
        }

        public async Task UpdateRole(Role role)
        {
            // Find existing role, update properties, and save changes
        }

        public async Task DeleteRole(string roleId)
        {
            // Find role by ID, mark it as deleted, and save changes
        }
    }
}
