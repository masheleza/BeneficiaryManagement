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
using Microsoft.AspNetCore.Mvc.Cors;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;

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
            services.AddCors(x => x.AddPolicy("defaultPolicy", builder =>
            {
                builder.WithOrigins("http://localhost:4200/", "https://localhost:4200/").AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
            }));

            services.AddMvc();

            services.AddControllers()
                .AddNewtonsoftJson(j => j.UseMemberCasing());


            var appSettings = new AppSettings();
            var dBContext = new BeneficiaryManagementDbConnection();
            _Configuration.GetSection("AppSettings").Bind(appSettings);      
             _Configuration.GetSection("ConnectionStrings").Bind(dBContext);            
            
            _Configuration.Bind("ConnectionStrings", dBContext);
            services.AddSingleton(dBContext);
            services.AddSingleton<IBeneficiaryManagementDbConnection>(dBContext);

            services.AddDbContext<BMDatabaseContext>(c => c.UseSqlite(dBContext.ConnectionString, sqliteOptionsAction: sqliteOptions =>
            {
                sqliteOptions.CommandTimeout(0);                
            }));

            services.AddApplicationInsightsTelemetry(s => {
                s.InstrumentationKey = appSettings.InstrumentationKey;
                s.EnableDebugLogger = true;
                s.EnableHeartbeat = true;
                s.AddAutoCollectedMetricExtractor = true;
                s.RequestCollectionOptions.TrackExceptions = true;
                s.EnableQuickPulseMetricStream = true;
            });

            services.AddMediatR(typeof(AddUserCommandHandler).GetTypeInfo().Assembly);

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
            app.UseStaticFiles();
            app.UseRouting();
            app.UseCors("defaultPolicy");
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
