using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using virtualInterview.Models.Entities;

namespace virtualInterview.Repository.RolesRepositories
{
    public interface IRoleRepository
    {
        Task<IEnumerable<Role>> GetAllRoles(); // Implement method to retrieve all roles
        Task<Role> GetRoleById(string roleId); // Implement method to get role by ID
        Task AddRole(Role role); // Implement method to add a new role
        Task UpdateRole(Role role); // Implement method to update an existing role
        Task DeleteRole(string roleId); // Implement method to soft delete a role
    }
}
