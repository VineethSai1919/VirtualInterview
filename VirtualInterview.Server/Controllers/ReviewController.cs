using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using virtualInterview.Repository.ReviewRepositories;

namespace VirtualInterview.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;

        /// Step 1: Inject the Review repository through the constructor
       

        ///Step 2:  Retrieves all review candidates for a given schedule ID.
        [HttpGet]
        [Route("GetAllReviewCandidate")]
        public async Task<ActionResult> GetAllReviewCandidate(string ScheduleId)
        {
            return Ok();

        }
    }

}
