using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [EnableCors(methods:"*", headers:"*", origins:"*")]
    public class UserController : ApiController
    {
        [HttpGet]
        public List<User> getAllUsers()
        {
            return ListUser.userList;
        }
        [HttpGet]
        public void insert(User u)
        {
             ListUser.userList.Add(u);
        }
        
        [HttpGet]
        public int lookForUser(string name, string password)
        {
            User ur = ListUser.userList.FirstOrDefault(u => u.userName == name);
            
            if(ur==null)
             return 0;
            if (ur.userPassword == password)
                return 1;
            return 2;
        }
        
    }
}
