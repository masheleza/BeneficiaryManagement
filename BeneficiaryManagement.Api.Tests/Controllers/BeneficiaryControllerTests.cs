using System;
using System.Threading.Tasks;
using BeneficiaryManagement.Api.Tests.Helpers;
using BeneficiaryManagement.API.Controllers;
using Features.Core.Features.Beneficiary.Messages;
using Features.Core.Helpers;
using Features.Core.Models;
using Features.Core.Repository;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace BeneficiaryManagement.Api.Tests.Controllers
{
    public class BeneficiaryControllerTests
    {
        private BeneficiaryController _controller;
        private Mock<IMediator> _mediator;
        private Mock<DbSet<Beneficiary>> _benef;
        private Mock<BMDatabaseContext> _dbContext;
        private Mock<IConfiguration> _mockConfig;
          
        [TestInitialize]
        public void TestSetup()
        {
            var options = new DbContextOptionsBuilder<BMDatabaseContext>().UseSqlite(@"Data Source=.\BeneficiaryManagementDB.db").Options;
            _mockConfig = new Mock<IConfiguration>();
            _dbContext = new Mock<BMDatabaseContext>();
            _mediator = new Mock<IMediator>();
            _benef = new Mock<DbSet<Beneficiary>>();


            _dbContext.Setup(x => x.Set<Beneficiary>()).Returns(_benef.Object);
          
            _controller = new BeneficiaryController(_mockConfig.Object, _mediator.Object);            
        }

        [TestMethod]
        [TestCategory("BeneficiaryController")]
        public async Task AddBeneficiary_Success()
        {
            ApiResult<Beneficiary> result = (ApiResult<Beneficiary>)await _controller.Post(BenefDummyData.CreateBeneficiary_Success());

            Assert.IsNotNull(result);
            Assert.IsTrue(result.Success);
            Assert.IsNotNull(result.Data);
            Assert.AreEqual(1, result.Data.Id);
        }

        [TestMethod]
        [TestCategory("BeneficiaryController")]
        public async Task AddBeneficiary_Failure_InvalidModel()
        {
            var result = await _controller.Put(BenefDummyData.CreateUpdatedDeleteBeneficiary_FailureInvalidUserModel());

            Assert.IsNotNull(result);
            Assert.AreEqual(typeof(BadRequestResult),result.GetType());
        }        

        [TestMethod]
        [TestCategory("BeneficiaryController")]
        public async Task UpdateBeneficiary_Success()
        {
            ApiResult<Beneficiary> result = (ApiResult<Beneficiary>)await _controller.Post(BenefDummyData.CreateBeneficiary_Success());

            Assert.IsNotNull(result);
            Assert.IsTrue(result.Success);
            Assert.IsNotNull(result.Data);
            Assert.AreEqual(1, result.Data.Id);
        }      

        [TestMethod]
        [TestCategory("BeneficiaryController")]
        public async Task UpdateBeneficiary_Failure_DoesNotExist()
        {
            var result = await _controller.Put(BenefDummyData.CreateUpdatedDeleteBeneficiary_FailureInvalidUserModel());

            Assert.IsNotNull(result);
            Assert.AreEqual(typeof(BadRequestResult), result.GetType());
        }

        [TestMethod]
        [TestCategory("BeneficiaryController")]
        public async Task GetBeneficiary_Success()
        {
            ApiResult<Beneficiary> result = (ApiResult<Beneficiary>)await _controller.Get(BenefDummyData.GetUserAccount());

            Assert.IsNotNull(result);
            Assert.IsTrue(result.Success);
            Assert.IsNotNull(result.Data);
            Assert.AreEqual(1, result.Data.Id);
        }        

        [TestMethod]
        [TestCategory("BeneficiaryController")]
        public async Task DeleteBeneficiary_Success()
        {
            ApiResult<Beneficiary> result = (ApiResult<Beneficiary>)await _controller.Delete(BenefDummyData.GetBeneficiary());

            Assert.IsNotNull(result);
            Assert.IsTrue(result.Success);
        }
    }
}
