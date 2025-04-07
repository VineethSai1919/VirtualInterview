using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace virtualInterview.Repository.ResultRepositories
{
    public interface IResultRepository
    {
        ///Step 1: Define method to add List of result records
        ///Step 2: Define method to Update the Skipped answers results records
        ///Step 3: Define method to get the result records by schedule Id
        ///Step 4: Define method to Updates the candidation video file to result.
        ///Step 5: Define method to Retrieves results for analysis by result ID and question ID.
        ///Step 6: Define method to Updates the AI analysis report for a result.
        ///Step 7: Define method to Tests if AI analysis is complete for all questions in a session.
        ///Step 8: Define method to Analyzes AI responses for complete feedback asynchronously
        ///Step 9: Define method to Updates the AI response avatar for a schedule ID.
    }

}
