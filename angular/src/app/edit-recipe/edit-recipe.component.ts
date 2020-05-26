import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from 'src/Recipe';
import { Subscription } from 'rxjs';
import { Category } from 'src/Category';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
 
  constructor(public recipeService:RecipesService, public active:ActivatedRoute) { }
  
recipename:string;
ingLists:string[]=[""];
preLists:string[]=[""];
myNewRecipe:Recipe;
recipeForHere:Recipe;
categoriesList:Category[];
arive1:boolean=false;
arive2:boolean=false;
recipesArr:Recipe[];
hidden:boolean=false;
ifvalid:boolean=false;

getAllCategories(){
 return this.recipeService.getAllCategories().subscribe(suc=>{
    this.categoriesList=suc;
    if(this.arive2) this.hidden = true;
                     else this.arive1=true;
  }, err=>console.error());
}

copyrcp(){
this.myNewRecipe=new Recipe(this.recipeForHere.RecipeName, this.recipeForHere.RecipeCategory,
  this.recipeForHere.RecipePreperingTime, this.recipeForHere.RecipeDifficultLevel,
  this.recipeForHere.RecipeAddDate, this.recipeForHere.RecipeIngredients, 
  this.recipeForHere.RecipePreparation, this.recipeForHere.RecipeuserCode,
  this.recipeForHere.RecipePicture, this.recipeForHere.RecipeIf);
}

  ngOnInit() {
    this.getAllCategories();
    
    this.active.params.subscribe(suc => {
      this.recipename = suc['name']
      return this.recipeService.getAllRecipes().subscribe(
        succees => {
                     this.recipesArr = succees;
                     this.recipesArr.forEach(element => 
                      {  
                         if (element!=null&&element.RecipeName == this.recipename)
                          this.recipeForHere = element;
                     });
                      this.copyrcp();
                     if(this.arive1) this.hidden = true;
                     else this.arive2=true;
                    },
        err => { 
                 console.log(err); 
               })
   },
  err=>{console.log(err);});
   }

  addIngline(line:string, e){
   
    e.preventDefault();
    this.myNewRecipe.RecipeIngredients.pop();
    this.myNewRecipe.RecipeIngredients.push(line);
    this.myNewRecipe.RecipeIngredients.push("");
    //document.getElementsByClassName("inglin")[document.getElementsByClassName("inglin").length-1].setAttribute('value', '');
  }

  addPreline(line:string){
    debugger;
    this.myNewRecipe.RecipePreparation.pop();
    this.myNewRecipe.RecipePreparation.push(line);
    this.myNewRecipe.RecipePreparation.push("");
    //document.getElementsByClassName("inglin")[length].remove();
  }

  checkPassword(password){
     if(password.length>=8&&!!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=?&])[A-Za-z\d$@$!%* #+=?&]{3,}$/))
       {this.ifvalid=true;
        return true;
       }return false;
   }
  addRecipe(){
    
                 debugger
                 this.myNewRecipe.RecipePicture="assets/"+this.myNewRecipe.RecipeName+".jpg";
    if(this.checkPassword(this.myNewRecipe.RecipeuserCode))
             { 
              this.recipeService.removeRecipe(this.recipeForHere.RecipeName).subscribe(suc=>{
              }, err=>console.error());
              this.recipeService.addRecipe(this.myNewRecipe).subscribe(suc=>{
                alert("the recipe adden well!");
              }, err=>console.error());
                }
                 else alert("the password is not valid");
                //  this.myNewRecipe.RecipePreparation.pop();
                //  document.getElementsByClassName("inglin")[length-1].remove();
                //  this.myNewRecipe.RecipePreparation.pop();
                //  document.getElementsByClassName("prelin")[length-1].remove();
}
cancel(){
  this.myNewRecipe=new Recipe(this.recipeForHere.RecipeName, this.recipeForHere.RecipeCategory,
    this.recipeForHere.RecipePreperingTime, this.recipeForHere.RecipeDifficultLevel,
    this.recipeForHere.RecipeAddDate, this.recipeForHere.RecipeIngredients, 
    this.recipeForHere.RecipePreparation, this.recipeForHere.RecipeuserCode,
    this.recipeForHere.RecipePicture, this.recipeForHere.RecipeIf);
}
}