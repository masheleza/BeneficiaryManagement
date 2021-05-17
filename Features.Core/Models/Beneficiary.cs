using System.ComponentModel.DataAnnotations;

namespace Features.Core.Models
{
    public class Beneficiary
    {
        public int Id { get; set; }
        [Required,MinLength(5,ErrorMessage = "Beneficiary name cannot be shorter than {1} characters"),MaxLength(50,ErrorMessage ="Beneficiary name cannot be longer than {1} characters")]        
        public string Name { get; set; }
        [Required, MinLength(9, ErrorMessage = "Account number cannot be shorter than {1} characters"), MaxLength(15, ErrorMessage = "Account number cannot be longer than {1} characters")]
        public string AccountNumber { get; set; }
        [Required, MinLength(5, ErrorMessage = "Reference cannot be shorter than {1} characters"), MaxLength(50, ErrorMessage = "Reference cannot be longer than {1} characters")]
        public string Reference { get; set; }
        [Required]
        public int MainMemberId { get; set; }
    }
}
