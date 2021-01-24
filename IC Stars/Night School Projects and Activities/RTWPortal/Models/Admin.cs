namespace RTWPortal.Models
{
    
    public class Admin
    {
        public int ID { get; set; }
        public int OfficeID { get; set; }
        public string AD_Group_Name { get; set; }

        public Office Office { get; set; }
        
    }
}