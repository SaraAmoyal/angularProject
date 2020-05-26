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
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    public class CategoryController : ApiController
    {
        [HttpGet]
        public List<Category> getAllCategories()
        {
           return ListCategory.categoryList;
        }
    }
}
