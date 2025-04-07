using Azure.Storage.Blobs;
using Azure.Storage.Sas;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace virtualInterview.Repository.AzureStorageRepositories
{
    public class AzureStorageRepository : IAzureStorageRepository
    {
        private readonly IConfiguration _configuration;

        ///Step 1: Constructor that initializes the AzureStorageRepository with the provided configuration.
        
        ///Step 2: Implement method to retrieves a BlobContainerClient for the specified blob container name.
        
        ///Step 3: Implement method to generates a service SAS URI for the specified container client.
        
    }

}
