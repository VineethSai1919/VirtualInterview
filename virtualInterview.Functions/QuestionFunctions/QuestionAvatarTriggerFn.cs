using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using virtualInterview.Repository.ErrorLogsRepositories;
using virtualInterview.Repository.QuestionRepositories;

namespace virtualInterview.Functions.QuestionFunctions
{
    /// Azure Function triggered by a blob upload to process question avatars.
    public class QuestionAvatarTriggerFn
    {
        [FunctionName("QuestionAvatarTriggerFn")]
        public void Run([BlobTrigger("samples-workitems/{name}", Connection = "")] Stream myBlob, string name, ILogger log)
        {
            log.LogInformation($"C# Blob trigger function Processed blob\n Name:{name} \n Size: {myBlob.Length} Bytes");

        }
    }
}
