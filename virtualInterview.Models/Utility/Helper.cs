using BCrypt.Net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace virtualInterview.Models.Utility
{
    public static class Helper
    {
        public static string SymmetricSecurityKey => "SecurityConfig:symmetricSecurityKey";
        public static bool ValidateBCryptPassword(string plainPassword, string passwordHash)
        {
            var validatePassword = BCrypt.Net.BCrypt.EnhancedVerify(plainPassword, passwordHash, hashType: HashType.SHA512);
            return validatePassword;
        }
        public static string CreateBCryptPassword(string plainPassword)
        {
            return BCrypt.Net.BCrypt.EnhancedHashPassword(plainPassword, hashType: HashType.SHA512);

        }
    }
}
