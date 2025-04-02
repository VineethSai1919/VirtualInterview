using Azure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace virtualInterview.Repository.QuestionRepositories
{
    public interface IQuestionRepository
    {
        ///Step 1: Retrieves all questions with pagination.
        ///Step 2: Adds a new question and answer.
        ///Step 3: Updates an existing question and answer.
        ///Step 4: Deletes a question and its associated answer.
        ///Step 5: Updates the bot video URL for a specific question.
        ///Step 6: Creates a transcription for a question based on content URL.
        ///Step 7: Converts a video to a VTT file based on a JSON object.
    }

}
