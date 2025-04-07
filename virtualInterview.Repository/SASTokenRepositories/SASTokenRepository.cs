using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using virtualInterview.Repository.AzureStorageRepositories;

namespace virtualInterview.Repository.SASTokenRepositories
{
    public class SASTokenRepository : ISASTokenRepository
    {
        private readonly IConfiguration _configuration;
        private readonly IAzureStorageRepository _azureStorageRepository;

        /// Step 1: Constructor that initializes the SASTokenRepository with the provided configuration and Azure storage repository.
        

        ///Step 2: Implement method to add a SAS token for an interview
       
    }

}
