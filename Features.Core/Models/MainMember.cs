using System;
using System.ComponentModel.DataAnnotations;

namespace Features.Core.Models
{
    public class MainMember
    {
        public int Id { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public int Product { get; set; }
    }
}
