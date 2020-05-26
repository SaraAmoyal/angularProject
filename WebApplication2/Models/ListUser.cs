using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class ListUser
    {
        public static List<User> userList { get; set; }
        static ListUser()
        {
            userList = new List<User>()
            {
                new User() { userCode = 1234, userName = "sara", userAddress = "gjfd", mail = "fghfhh", userPassword = "" },
                new User() { userCode = 3456, userName = "lea", userAddress = "gjfd", mail = "fghfhh", userPassword = "Ashgf@hs56465" },
                new User() { userCode = 7890, userName = "moshe", userAddress = "gjfd", mail = "fghfhh", userPassword = "Da$6578493099" },
                new User() { userCode = 2345, userName = "esther", userAddress = "gjfd", mail = "fghfhh", userPassword = "456789" },
                new User() { userCode = 4567, userName = "shimon", userAddress = "gjfd", mail = "fghfhh", userPassword = "567890" },
            };
        }
       
    }  
}      
       
       