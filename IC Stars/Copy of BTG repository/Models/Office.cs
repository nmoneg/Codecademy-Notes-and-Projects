using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RTWPortal.Models
{
    public class Office
    {
        public int ID { get; set; }
        [Display(Name = "Office Name")]
        public string Office_Name { get; set; }
        [Display(Name = "Location Type")]
        public string Location_Type { get; set; }
        [Display(Name = "Status")]
        public string Status { get; set; }
        [Display(Name = "Services")]
        public string Services { get; set; }
        [Display(Name = "Market Unit")]
        public string Market_Unit { get; set; }
        [Display(Name = "City")]
        public string City { get; set; }
        [Display(Name = "Street Address")]
        public string Street_Address { get; set; }
        [Display(Name = "Zip Code")]
        public string Zip_Code { get; set; }
        [Display(Name = "Dress Code")]
        public string Dress_Code { get; set; }
        [Display(Name = "Tech Support")]
        public string Tech_Support { get; set; }
        [Display(Name = "Additional Info")]
        public string Additional_Info { get; set; }
        [Display(Name = "Visitors")]
        public string Visitors { get; set; }
        [Display(Name = "Special Considerations")]
        public string Special_Considerations { get; set; }
        [Display(Name = "Special Consideration Details")]
        public string Special_Consideration_Details { get; set; }
        [Display(Name = "Temperature Checks")]
        public string Temp_Checks { get; set; }
        public string User_Count { get; set; }

        public ICollection<Admin> Admin { get; set; }
        public ICollection<Employee> Employee { get; set; }
    }
}