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

        // Step 1: Inject the repository into the controller

        [HttpGet]
        [Route("GetRoles")]
        public async Task<ActionResult> GetRoles(int pageIndex, int pageSize, string searchname)
        {
            //Step 2: Implement API endpoint to retrieve all roles in paginator format
            return Ok();
        }
        [HttpGet]
        [Route("GetAllRoles")]
        public async Task<IActionResult> GetAllRoles()
        {
            // Step 3: Implement API endpoint to retrieve all roles
            return Ok();
        }


        [HttpPost]
        [Route("AddRole")]
        public async Task<IActionResult> AddRole( Role role)
        {
            // Step 4: Implement API endpoint to add a new role
            return Ok();
        }

        [HttpPut]
        [Route("UpdateRole")]
        public async Task<IActionResult> UpdateRole(string id, Role role)
        {
            // Step 5: Implement API endpoint to update an existing role
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteRole")]
        public async Task<IActionResult> DeleteRole(string id)
        {
            // Step 6: Implement API endpoint to soft delete a role
            return Ok();
        }
    }
}
