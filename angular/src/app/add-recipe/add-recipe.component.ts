import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from 'src/Recipe';
import { Category } from 'src/Category';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(public recipeService:RecipesService) { }
   ingLists:string[]=[""];
   preLists:string[]=[""];
   dd:Date;
  myNewRecipe:Recipe=new Recipe("", "", 0, 0, this.dd, this.ingLists, 
  this.preLists, JSON.parse(sessionStorage.getItem("TheUser")).password, "", true);  
  
  
sss:string[];
nnn:number;
ppp:string;
rrr:boolean;

ifvalid:boolean=false;
arive:boolean=false;
categoriesList:Category[];
  ngOnInit() {
    this.getAllCategories();
  }
  getAllCategories(){
   return this.recipeService.getAllCategories().subscribe(suc=>{
      this.categoriesList=suc;
      this.arive=true;
    }, err=>console.error());
  }
  addIngline(line:string){
   debugger
    this.ingLists.pop();
    this.ingLists.push(line);
    this.ingLists.push("");
    
  }
  addPreline(line:string){
    debugger;
    this.preLists.pop();
    this.preLists.push(line);
    this.preLists.push("");
    //document.getElementsByClassName("inglin")[length].remove();
     
    
  }
  checkPassword(password){
    if(password.length>=8&&!!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=?&])[A-Za-z\d$@$!%* #+=?&]{3,}$/))
    {this.ifvalid=true;
      return true;
    }
    return false;
};
  addRecipe(){
    debugger
            if(this.checkPassword(this.myNewRecipe.RecipeuserCode))
            if(this.myNewRecipe.RecipePreperingTime>=0&&this.myNewRecipe.RecipePreperingTime<1000)
              this.recipeService.addRecipe(this.myNewRecipe).subscribe(suc=>{
                alert("the recipe adden well!");
              }, err=>console.error());
                 
                 this.ingLists.pop();
                 document.getElementsByClassName("inglin")[length].remove();
                 this.preLists.pop();
                 document.getElementsByClassName("prelin")[length].remove();
            }
} 


