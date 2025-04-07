using System;
using System.IO;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;

namespace virtualInterview.Functions.InterviewFunctions
{
    ///This method is triggered by a blob event in Azure Storage. It processes the blob content, converts it to VTT format, generates an AI prompt, and updates the database with the analysis results.
    public class InterviewTranscriptionVttBlobTrigger
    {
        [FunctionName("InterviewTranscriptionVttBlobTrigger")]
        public void Run([BlobTrigger("samples-workitems/{name}", Connection = "")]Stream myBlob, string name, ILogger log)
        {
            log.LogInformation($"C# Blob trigger function Processed blob\n Name:{name} \n Size: {myBlob.Length} Bytes");
        }
    }
}
