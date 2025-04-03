using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using virtualInterview.EFCore;
using virtualInterview.Repository.ErrorLogsRepositories;
using virtualInterview.Repository.QuestionRepositories;
using virtualInterview.Repository.SkillsRepositories;
using virtualInterview.Repository.WebJobRepositories;

[assembly: FunctionsStartup(typeof(ProjectAI.Functions.Startup))]
namespace ProjectAI.Functions
{
    public class Startup : FunctionsStartup
    {
        public static string ApplicationRootPath { get; private set; }
        public override void Configure(IFunctionsHostBuilder builder)
        {
            FunctionsHostBuilderContext context = builder.GetContext();
            ApplicationRootPath = context.ApplicationRootPath;

            string con = context.Configuration.GetConnectionString("DefaultConnection");
            builder.Services.AddDbContext<VirtualInterviewDbContext>(options =>
            {
                options.UseSqlServer(con, s => s.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery));
            }, ServiceLifetime.Scoped);
            builder.Services.AddTransient<IQuestionRepository, QuestionRepository>();
            builder.Services.AddTransient<IWebJobRepository, WebJobRepository>();
            builder.Services.AddTransient<IErrorLogs, ErrorLogs>();
            builder.Services.AddTransient<ISkillsRepository, SkillsRepository>();
        }
    }
}
