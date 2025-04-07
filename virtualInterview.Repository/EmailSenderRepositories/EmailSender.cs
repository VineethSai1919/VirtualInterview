using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using virtualInterview.EFCore;
using virtualInterview.Repository.EmailServicesRepositories;
using virtualInterview.Repository.ErrorLogsRepositories;

namespace virtualInterview.Repository.EmailSenderRepositories
{
    public class EmailSender : IEmailSender
    {
        private readonly VirtualInterviewDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly IEmailServices _emailServices;
        private readonly IErrorLogs _errorLogsRepository;

        // Step 1: Implement constructor and inject database context and initializes the Interfaces
        ///Step 2: Implement method to sends a scheduled exam invite asynchronously.
        ///Step 3: Implement method to sends an updated scheduled exam invite asynchronously.
        /// Step 4: Sends a forget password email asynchronously.
    }

}
