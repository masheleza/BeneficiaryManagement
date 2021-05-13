using System;
using System.ComponentModel.DataAnnotations;

namespace Features.Core.Models
{
    public class UserAccount
    {
        public int Id { get; set; }
        [Required, MinLength(5, ErrorMessage = "Username cannot be shorter than {1} characters"), MaxLength(50, ErrorMessage = "Username cannot be longer than {1} characters")]
        public string UserName { get; set; }
        [Required, MinLength(5, ErrorMessage = "First Name cannot be shorter than {1} characters"), MaxLength(50, ErrorMessage = "First Name cannot be longer than {1} characters")]
        public string FirstName { get; set; }
        [Required, MinLength(5, ErrorMessage = "Surname cannot be shorter than {1} characters"), MaxLength(50, ErrorMessage = "Surname cannot be longer than {1} characters")]
        public string Surname { get; set; }
        [Required, MinLength(8, ErrorMessage = "Password cannot be shorter than {1} characters"), MaxLength(50, ErrorMessage = "Password cannot be longer than {1} characters")]
        public string Password { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public bool IsAdmin { get; set; }
    }
}
