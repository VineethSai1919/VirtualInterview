using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using virtualInterview.EFCore;
using virtualInterview.Models.Utility;

namespace virtualInterview.Repository.AuthenticationRepositories
{
    public class AuthenticationRepository : IAuthenticationRepository
    {
        private readonly VirtualInterviewDbContext _context;
        // Step 1: Implement constructor and inject database context
        //Step 2:Implement Method to Authenticates an admin user and generates a JWT token upon successful login.
        //Step 3:Generates a JWT token for an authenticated admin user.

    }

}
