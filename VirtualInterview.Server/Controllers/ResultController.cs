using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using virtualInterview.Repository.ResultRepositories;

namespace VirtualInterview.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResultController : ControllerBase
    {
        private readonly IResultRepository _resultRepository;

        /// Step 1: Inject the Result repository through the constructor


        ///Step 2: Adds a list of result records to the database.
        [HttpPost]
        [Route("AddListOfResultRecords")]
        public async Task<ActionResult> AddListOfResultRecords(EntityEntry insertResultDTO)
        {
            return Ok();
        }

        /// Step 3: Updates the status of skipped answers for a list of result IDs associated with a specific schedule
        [HttpPost]
        [Route("UpdateSkippedAnswers")]
        public async Task<ActionResult<bool>> UpdateSkippedAnswers(List<string> resultIds, string scheduleId)
        {
            return Ok();
        }

        ///Step 4: Retrieves results associated with a specific schedule ID, paginated by page index and size.
        [HttpGet]
        [Route("GetResultByScheduleId")]
        public async Task<ActionResult> GetResultByScheduleId(string scheduleId, int pageIndex, int pageSize)
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }

}
