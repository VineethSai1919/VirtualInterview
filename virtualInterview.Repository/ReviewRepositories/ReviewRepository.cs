using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using virtualInterview.EFCore;
using virtualInterview.Repository.ErrorLogsRepositories;

namespace virtualInterview.Repository.ReviewRepositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly VirtualInterviewDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly IErrorLogs _errorLogsRepository;

        /// Step 1: Implement constructor and inject database context


        /// Step 2: This method retrieves all schedule results by a given schedule ID.It fetches the schedule data, joins results with questions and candidates,
    }

}
