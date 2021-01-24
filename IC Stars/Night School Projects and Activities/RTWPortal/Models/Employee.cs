namespace RTWPortal.Models
{
    
    public class Employee
    {
        public int ID { get; set; }
        public string Admin { get; set; }
        public int OfficeID { get; set; }
        public string Home_Office { get; set; }
        public Office Office { get; set; }
        
    }
}