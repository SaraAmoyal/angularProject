using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class ListCategory
    {
        public static  List<Category> categoryList;
            static ListCategory()
            {
             categoryList = new List<Category>()
              {
                  new Category(){categoryCode=1234,categoryName="cooking",categoryIcon="notFpound"},
                  new Category(){categoryCode=4567,categoryName="backing",categoryIcon="notFpound"},
                  new Category(){categoryCode=8547,categoryName="salads",categoryIcon="notFpound"}
              };
            }
    }
}