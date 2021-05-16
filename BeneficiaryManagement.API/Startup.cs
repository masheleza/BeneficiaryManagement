using System;
using BM.common;
using Features.Core.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Reflection;
using System.IO;
using Swashbuckle.AspNetCore.SwaggerUI;
using MediatR;
using Features.Core.Features.UserManagement.Command;
using Microsoft.Extensions.Configuration;

namespace BeneficiaryManagement.API
{
    public class Startup
    {        
        private const string APINAME = "Beneficiary Management API";
        private const string APIVERSION = "v1";

        public IConfiguration _Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            _Configuration = configuration;
        }          

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var appSettings = _Configuration.GetSection("AppSettings");
            var bMDbConnectionString = _Configuration.GetSection("BMDBContext");
            
            services.Configure<AppSettings>(appSettings);
            services.Configure<BeneficiaryManagementDbConnection>(bMDbConnectionString);

            var dBContext = new BeneficiaryManagementDbConnection();

            _Configuration.Bind("BMDBContext", dBContext);
            services.AddSingleton(dBContext);
            services.AddSingleton<IBeneficiaryManagementDbConnection>(dBContext);

            services.AddDbContext<BMDatabaseContext>(c => c.UseSqlite(_Configuration.GetConnectionString("BMConnection"), sqliteOptionsAction: sqliteOptions =>
            {
                sqliteOptions.CommandTimeout(0);                
            }));

            services.AddApplicationInsightsTelemetry(s => {
                s.InstrumentationKey = appSettings.GetValue<string>("InstrumentationKey");
                s.EnableDebugLogger = true;
                s.EnableHeartbeat = true;
                s.AddAutoCollectedMetricExtractor = true;
                s.RequestCollectionOptions.TrackExceptions = true;
                s.EnableQuickPulseMetricStream = true;
            });

            services.AddControllers()
                .AddNewtonsoftJson(j => j.UseMemberCasing());

            services.AddMediatR(typeof(AddUserCommandHandler).GetTypeInfo().Assembly);

            services.AddMvc(mvc =>
            {
                mvc.EnableEndpointRouting = true;
            })
            .AddControllersAsServices();

            services.AddSwaggerGen(sw =>
            {
                sw.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = APINAME, Version = APIVERSION });
                sw.IgnoreObsoleteActions();
                sw.IgnoreObsoleteProperties();
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                sw.IncludeXmlComments(xmlPath);
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseSwagger();
            app.UseSwaggerUI( sw =>
            {
                sw.SwaggerEndpoint("/swagger/v1/swagger.json", $"{APINAME} {APIVERSION}");
                sw.RoutePrefix = string.Empty;
                sw.EnableValidator(null);
                sw.DocExpansion(DocExpansion.None);
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseStaticFiles();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
