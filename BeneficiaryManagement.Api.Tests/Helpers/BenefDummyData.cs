using System;
using System.Collections.Generic;
using Features.Core.Models;

namespace BeneficiaryManagement.Api.Tests.Helpers
{
    public static class BenefDummyData
    {
        public static UserAccount GetUserAccount()
        {
            return new UserAccount
            {
                Id = 1,
                FirstName = "Zandile",
                Surname = "Mashele",
                UserName = "masheleza",
                IsActive = true,
                IsAdmin = true,
                Password = "GetAllZandile"
            };
        }

        public static Beneficiary GetBeneficiary()
        {
            return new Beneficiary
            {
                Id = 1,
                Name = "Celestine",
                AccountNumber = "933232323",
                Reference = "JadPort",
                MainMemberId = 1
            };
        }

        public static Beneficiary CreateBeneficiary_Success()
        {
            return new Beneficiary
            {
                Id = 0,
                Name = "Celestine",
                AccountNumber = "933232323",
                Reference = "JadPort",
                MainMemberId = 1
            };
        }

        public static Beneficiary UpdateBeneficiary_Success()
        {
            return new Beneficiary
            {
                Id = 1,
                Name = "Justine",
                AccountNumber = "933232323",
                Reference = "JadPort",
                MainMemberId = 1
            };
        }
        public static Beneficiary CreateUpdatedDeleteBeneficiary_FailureInvalidUserModel()
        {
            return new Beneficiary
            {
                Id = 0,
                Name = "Celestine",
                AccountNumber = "933232323",
                Reference = "JadPort",
                MainMemberId = 0
            };
        }

        public static Beneficiary CreateBeneficiary_FailureModel()
        {
            return new Beneficiary
            {
                Id = 0,
                Name = "Celestine",
                AccountNumber = null,
                Reference = "JadPort",
                MainMemberId = 0
            };
        }

        public static List<Beneficiary> GetAllBeneficiary()
        {
            return new List<Beneficiary>()
            {
                new Beneficiary
                {
                    Id = 1,
                    Name = "Celestine",
                    AccountNumber = "933232323",
                    Reference = "JadPort",
                    MainMemberId = 1
                },
                new Beneficiary
                {
                    Id = 1,
                    Name = "Johan",
                    AccountNumber = "096503233",
                    Reference = "StrePorts",
                    MainMemberId = 1
                },
                new Beneficiary
                {
                    Id = 1,
                    Name = "Lizzie",
                    AccountNumber = "1093236343",
                    Reference = "JorCenter",
                    MainMemberId = 1
                },
                new Beneficiary
                {
                    Id = 1,
                    Name = "Gavin",
                    AccountNumber = "10298730433",
                    Reference = "DavClub",
                    MainMemberId = 1
                },
                new Beneficiary
                {
                    Id = 1,
                    Name = "Lucious",
                    AccountNumber = "9503703423",
                    Reference = "ReiHarbor",
                    MainMemberId = 1
                }
            };
        }
    }
}
