using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using virtualInterview.Repository.SkillsRepositories;

namespace VirtualInterview.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillsController : ControllerBase
    {
        private readonly ISkillsRepository _skillRepository;
        // Step 1: Inject the Skills repository through the constructor

        [HttpGet]
        [Route("GetSkills")]
        public async Task<ActionResult> GetSkills(int pageIndex, int pageSize, string? searchname)
        {
            // Step 2: Implement an endpoint to get all Skills with pagination and search
            return Ok();
        }

        [HttpPost]
        [Route("AddSkill")]
        public async Task<ActionResult> AddSkill(string skillName)
        {
            // Step 3: Implement an endpoint to create a Skill
            
            return Ok();
        }
        [HttpPut]
        [Route("UpdateSkill")]
        public async Task<ActionResult> UpdateSkill(EntityEntry skillDto)
        {
            // Step 4: Implement an endpoint to update an existing Skill
            return Ok();
        }
        [HttpDelete]
        [Route("DeleteSkill")]
        public async Task<ActionResult> DeleteSkill(string skillId)
        {
            // Step 5: Implement an endpoint to delete (soft delete) a Skill
            return Ok();
        }

        [HttpGet]
        [Route("GetAllSkills")]
        public async Task<ActionResult> GetAllSkills()
        {
            // Step 6: Implement an endpoint to get all Skills
            return Ok();
        }
    }

}
