using System;
using System.Collections.Generic;
using System.Formats.Asn1;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using virtualInterview.EFCore;
using virtualInterview.Repository.EmailSenderRepositories;

namespace virtualInterview.Repository.ScheduleRepositories
{
    public class ScheduleRepository : IScheduleRepository
    {
        private readonly VirtualInterviewDbContext _context;
        private readonly IEmailSender _emailSender;

        // Step 1: Implement constructor and inject database context and initialize Interface
        
        /// Step 2: Implement method to generates a random password of the specified length.
        ///Step 3: Implement method to  updates the schedule for a candidate.
        ///Step 4: Implement method to sends updated mail to the user
        ///Step 5: Implement method to retrieves the scheduled candidates based on the provided criteria.
        /// Step 6: Implement method to adds a list of schedules for candidates.
        //Step 7: Implement method to sends Welcome Mail to the User
        ///Step 8: Implement method to imports data from a file.
        ///Step 9: Implement method to converts a Excel File to CSV File
        /// Step 10: Implement method to exports data to a CSV format.
   
    }

}
