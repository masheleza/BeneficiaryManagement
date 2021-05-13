using System;
using System.ComponentModel.DataAnnotations;

namespace Features.Core.Models
{
    public class Products
    {
        public int Id { get; set; }
        [Required, MinLength(5, ErrorMessage = "Product Name cannot be less than {1} characters"), MaxLength(20, ErrorMessage = "Product Name cannot be greater than {1} characters")]
        public string Name { get; set; }
    }
}
