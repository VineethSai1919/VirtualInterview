using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using virtualInterview.Repository.AuthenticationRepositories;

namespace VirtualInterview.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationRepository _authenticationRepository;

        // Step 1: Inject the IAuthenticationRepository repository through the constructor
        public AuthenticationController(IAuthenticationRepository authenticationRepository)
        {
            _authenticationRepository = authenticationRepository;
        }
        //Step 2: Implement an endpoint to Authenticates an admin user and generates a JWT token upon successful login.
        [HttpPost]
        [Route("AdminLogin")]
        public async Task<ActionResult> AdminLogin(EntityEntry loginDetails)
        {
            return Ok();
        }
    }


}
