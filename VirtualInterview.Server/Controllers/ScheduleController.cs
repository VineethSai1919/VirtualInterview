using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using virtualInterview.Repository.ScheduleRepositories;

namespace VirtualInterview.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        private readonly IScheduleRepository _scheduleRepo;
        // Step 1: Inject the Schedule repository through the constructor
        public ScheduleController(IScheduleRepository scheduleRepo)
        {
            _scheduleRepo = scheduleRepo;
        }

        ///Step 2: Retrieves scheduled candidates based on the provided criteria.
        [HttpPost]
        [Route("GetScheduledCandidates")]
        public async Task<ActionResult> GetScheduledCandidates(EntityEntry getAllSchedulesDTO)
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

        ///Step 3: Updates the schedule for a candidate.
        [HttpPost]
        [Route("UpdateScheduleForCandidate")]
        public async Task<ActionResult> UpdateScheduleForCandidate(EntityEntry scheduledStatusDTO)
        {
            return Ok();
        }

        ///Step 4: Adds a list of schedules for candidates.
        [HttpPost]
        [Route("AddScheduleListOfCand")]
        public async Task<ActionResult> AddScheduleListOfCand(EntityEntry scheduleDTO)
        {
            return Ok();
        }

        ///Step 5: Imports a file containing schedule data.
        [HttpPost]
        [Route("ImportFile")]
        
        public async Task<ActionResult> ImportFile(IFormFile file)
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

        ///Step 6: Downloads the format CSV file.
        [HttpGet]
        [Route("DownloadFormatCsv")]
        public async Task<ActionResult> DownloadFormatCsv()
        {
            byte[] buffer;
            using (var ms = new MemoryStream())
            {
                buffer = ms.ToArray();
            }


            //byte[] buffer = await System.IO.File.ReadAllBytesAsync(filePath.FileName);
            return File(buffer, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }
    }

}
