using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace BeneficiaryManagement.API
{
    public class Program
    {
        public static void Main(string[] args)
        {            
            CreateHostBuilder(args).ConfigureAppConfiguration(
                (hostContext, config) =>
                {
                    var env = hostContext.HostingEnvironment;
                    config.AddJsonFile("appsettings.json", false);
                    config.AddEnvironmentVariables();
                }).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
