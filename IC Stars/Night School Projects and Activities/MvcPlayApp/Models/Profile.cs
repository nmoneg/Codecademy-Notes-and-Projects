using System;
using System.ComponentModel.DataAnnotations;

namespace MvcPlayApp.Models
{
    public class Profile
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [DataType(DataType.Date)]
        public DateTime Birthday { get; set; }
        public string Favorite_food { get; set; }
        public decimal Age { get; set; }
    }
}

