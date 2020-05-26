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
    public class RecipeController : ApiController
    {
        [HttpPost]
        public void addRecipe(Recipe recipe)
        {
            ListRecipes.recipesList.Add(recipe);
        }
        [HttpGet]
        public List<Recipe> getAllRecipes()
        {
            return ListRecipes.recipesList;
        }
        [HttpGet]
        public IHttpActionResult  DelRecipe (string recipename)
        {
            Recipe rc = ListRecipes.recipesList.Find(recip => recip.RecipeName == recipename);
            ListRecipes.recipesList.Remove(rc);
            return Ok("נמחק בהצלחה");
        }
    }
}
