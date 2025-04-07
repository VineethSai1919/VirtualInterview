using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using virtualInterview.Repository.CandidatesRepositories;

namespace VirtualInterview.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private readonly ICandidatesRepository _candidatesRepository;
        /// Step 1: Constructor for the CandidatesController class, which initializes the ICandidatesRepository instance.
       

        ///Step 2: Implements the UpdateCandidateById method to update a candidate's information by their ID.
        [HttpPost]
        [Route("UpdateCandidateById")]
        public async Task<ActionResult> UpdateCandidateById(EntityEntry updateCandidate)
        {
            try
            {
                return Ok();
            }
            catch
            {
                return BadRequest();
            }

        }
    }

}
