using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace RTWPortal.Models
{
    public class Feedback
    {
        public int ID { get; set; }
        public string Rating { get; set; }
        public string Comment { get; set; }
        
    }
}