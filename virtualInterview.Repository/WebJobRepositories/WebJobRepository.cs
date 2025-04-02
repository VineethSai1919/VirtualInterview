using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using virtualInterview.Repository.ErrorLogsRepositories;

namespace virtualInterview.Repository.WebJobRepositories
{
    public class WebJobRepository : IWebJobRepository
    {
        private readonly IConfiguration _configuration;
        private readonly IErrorLogs _errorLogsRepository;
        private static readonly JsonSerializerOptions defaultJsonSerializerOptions = new(JsonSerializerDefaults.Web)
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
        };
        private const string ApiVersion = "2024-08-01";

        // Step 1: Implement constructor and initialize Interfaces
        
        // Step 2: This method creates a batch avatar job by sending a PUT request to the Azure MultiService API.
        // Step 3:This method deletes a batch avatar job by sending a DELETE request to the Azure MultiService API
        // Step 4:This method prints the response body and request ID to the error console if the response is not successful.
        // Step 5:This method retrieves the status of a batch avatar job by sending a GET request to the Azure MultiService API.

    }

}
