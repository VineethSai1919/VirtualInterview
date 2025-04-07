using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using virtualInterview.Repository.SASTokenRepositories;

namespace VirtualInterview.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SASTokenAPIController : ControllerBase
    {
        private readonly ISASTokenRepository _asaTokenRepository;

        // Step 1: Inject the SASToken repository through the constructor
       

        /// Step 2: Implements the AddSasTokenForInterview method to add a SAS token for an interview.
        [HttpPost]
        [Route("AddSasTokenForInterview")]
        public async Task<ActionResult> AddSasTokenForInterview()
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
