using System;
using System.IO;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;

namespace virtualInterview.Functions.InterviewFunctions
{
    /// Azure Function triggered by a blob upload to process Interview avatars.
    public class InterviewVideosBlobTriggerFn
    {
        [FunctionName("InterviewVideosBlobTriggerFn")]
        public void Run([BlobTrigger("samples-workitems/{name}", Connection = "")]Stream myBlob, string name, ILogger log)
        {
            log.LogInformation($"C# Blob trigger function Processed blob\n Name:{name} \n Size: {myBlob.Length} Bytes");
        }
    }
}
