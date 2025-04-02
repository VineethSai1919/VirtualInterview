using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using virtualInterview.Repository.QuestionRepositories;

namespace VirtualInterview.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionRepository _questionRepository;

        // Step 1: Inject the Question repository through the constructor
        public QuestionController(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }

        //Step 2: Retrieves all questions based on the provided filter criteria.
        [HttpPost]
        [Route("GetAllQuestions")]
        public async Task<IActionResult> GetAllQuestions(EntityEntry getAllQuestionsDTO)
        {
            return Ok();
        }

        //Step 3: Adds a question and answer to the database.
        [HttpPost]
        [Route("AddQuesAns")]
        public async Task<ActionResult> AddQuesAns(EntityEntry addQueAnsDTO)
        {
            return Ok();
        }


        //Step 4: Updates the answer to a question.
        [HttpPut]
        [Route("UpdateQuesAnswer")]
        public async Task<ActionResult> UpdateQuesAnswer(EntityEntry quesAnsDTO)
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }

        //Step 5: Deletes a question and answer from the database.
        [HttpDelete]
        [Route("DeleteQuesAnser")]
        public async Task<ActionResult> DeleteQuesAnser(string questionId)
        {
            return Ok();
        }
    }

}
