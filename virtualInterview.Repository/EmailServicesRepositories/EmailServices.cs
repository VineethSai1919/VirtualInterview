using Azure;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace virtualInterview.Repository.EmailServicesRepositories
{
    public class EmailServices : IEmailServices
    {
        private readonly IConfiguration _configuration;
        ///Step 1: Implement constructor and inject database context
        ///Step 2: Implement method to sends an email asynchronously to the specified recipients.
    }

}
