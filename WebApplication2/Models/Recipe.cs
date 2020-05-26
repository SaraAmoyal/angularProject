using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Recipe
    {
        public string RecipeName { get; set; }
        public string RecipeCategory { get; set; }
        public int RecipePreperingTime { get; set; }
        public int RecipeDifficultLevel { get; set; }
        public DateTime RecipeAddDate { get; set; }
        public List<string> RecipeIngredients { get; set; }
        public List<string> RecipePreparation { get; set; }
        public string RecipeuserCode { get; set; }
        public string RecipePicture { get; set; }
        public bool RecipeIf { get; set; }
    }
}
        
          
        