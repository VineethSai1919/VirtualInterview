using Microsoft.AspNetCore.Mvc;
using virtualInterview.Models.Entities;
using virtualInterview.Repository.RolesRepositories;

namespace VirtualInterview.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly IRoleRepository _roleRepository;

        public RoleController(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRoles()
        {
            // Call repository method to get all roles and return response
            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRoleById(string id)
        {
            // Call repository method to get role by ID and return response
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> AddRole([FromBody] Role role)
        {
            // Call repository method to add a new role and return response
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRole(string id, [FromBody] Role role)
        {
            // Check if ID matches role PK, call update method, and return response
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRole(string id)
        {
            // Call repository method to delete role and return response
            return Ok();
        }
    }
}
