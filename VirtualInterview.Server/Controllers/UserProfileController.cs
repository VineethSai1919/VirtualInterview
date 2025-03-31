using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using virtualInterview.Repository.UserProfileRepositories;

namespace VirtualInterview.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _repository;

        // Step 1: Inject the UserProfile repository through the constructor

        [HttpGet]
        [Route("GetAll")]
        public async Task<ActionResult> GetAll(int pageIndex, int pageSize, string? searchname)
        {
            // Step 2: Implement an endpoint to get all user profiles with pagination and search
            return Ok();
        }


        [HttpPost]
        [Route("CreateUserProfile")]
        public async Task<ActionResult> Create(EntityEntry userProfile)
        {
            // Step 3: Implement an endpoint to create a new user profile
            return Ok();
        }

        [HttpPut]
        [Route("UpdateUserProfile")]
        public async Task<ActionResult> Update(EntityEntry userProfile)
        {
            // Step 4: Implement an endpoint to update an existing user profile
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteUserProfile")]
        public async Task<ActionResult> Delete(string id)
        {
            // Step 5: Implement an endpoint to delete (soft delete) a user profile
            return Ok();
        }
    }

}
