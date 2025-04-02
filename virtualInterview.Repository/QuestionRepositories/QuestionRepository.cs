using Azure;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using virtualInterview.EFCore;
using virtualInterview.Models.Utility;
using virtualInterview.Repository.ErrorLogsRepositories;
using virtualInterview.Repository.WebJobRepositories;

namespace virtualInterview.Repository.QuestionRepositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly VirtualInterviewDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly IWebJobRepository _webJobRepository;
        private const string ApiVersion = "2024-08-01";
        private readonly IErrorLogs _errorLogsRepository;

        // Step 1: Implement constructor and inject database context and initialize the Interfaces

        /// Step 2:  Method implementation to Retrieve all questions based on the provided criteria.

        // Step 3:  Method implementation to Add a new question and answer.

        // Step 4:  Method implementation to Add a new question and creates an avatar for the question.

        // Step 5:  Method implementation to Updates an existing question and answer.

        // Step 6: Method implementation to Update an existing question and creates an avatar for the question.

        // Step 7:  Method implementation to Deletes a question by marking it as inactive.


        // Step 8:  Method implementation to Updates the video URL of a question with the bot path URL.

        // Step 9:  Method implementation to Updates the transcription status of a question.

        // Step 10:  Method implementation to Creates a transcription for a question.

        // Step 11:  Method implementation to Converts a video to a VTT file.

        // Step 12:  Method implementation to Converts a JSON object to a VTT file.

        // Step 13:  Method implementation to Converts ticks to time.
        // Method implementation to Uploads a file to Azure Blob Storage.

        // Step 14:  Method implementation to Updates a question with a VTT file.

        //Step-15: Method implementation to Retrieve all questions.
    }

}
