using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
[assembly: FunctionsStartup(typeof(virtualinterview.Functions.Startup))]
namespace virtualinterview.Functions
{
    public class Startup : FunctionsStartup
    {
        public static string ApplicationRootPath { get; private set; }
        public override void Configure(IFunctionsHostBuilder builder)
        {
            FunctionsHostBuilderContext context = builder.GetContext();
            ApplicationRootPath = context.ApplicationRootPath;
        }
    }
}
