using System;
using BM.common;
using Features.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Features.Core.Repository
{
    public class BMDatabaseContext: DbContext
    {
        private readonly IBeneficiaryManagementDbConnection _dbConnection;
        private static bool _created = false;
        public BMDatabaseContext(IBeneficiaryManagementDbConnection dbConnection)
        {
            _dbConnection = dbConnection;

            if (!_created)
            {
                Database.EnsureDeleted();
                Database.EnsureCreated();
                _created = true;
            }
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(_dbConnection.ConnectionString);
        }

        public DbSet<Roles> Roles { get; set; }
        public DbSet<UserAccount> UserAccounts { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<MainMember> MainMembers { get; set; }
        public DbSet<Beneficiary> Beneficiaries { get; set; }
    }
}
