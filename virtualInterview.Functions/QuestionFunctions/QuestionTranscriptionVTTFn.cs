using System;
using System.IO;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace virtualInterview.Functions.QuestionFunctions
{
    /// Azure Function triggered by a blob upload to process question transcriptions.
    public class QuestionTranscriptionVTTFn
    {
        [FunctionName("QuestionTranscriptionVTTFn")]  
        public void Run([BlobTrigger("samples-workitems/{name}", Connection = "")]Stream myBlob, string name, ILogger log)
        {
            log.LogInformation($"C# Blob trigger function Processed blob\n Name:{name} \n Size: {myBlob.Length} Bytes");

        }
    }
}
