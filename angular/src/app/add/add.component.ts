import { Component, OnInit } from '@angular/core';
import { Category } from 'src/Category';
import { Recipe } from 'src/Recipe';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public recipeService:RecipesService, public router:Router) { }
   ingLists:string[]=[""];
   preLists:string[]=[""];
   dd:Date; 
   password;
  myNewRecipe:Recipe=new Recipe("", "", 0, 0, this.dd, this.ingLists, 
  this.preLists, this.password, "", true);  
  
 
sss:string[];
nnn:number;
ppp:string;
rrr:boolean;
mypicture:File;
ifvalid:boolean=false;
arive:boolean=false;
categoriesList:Category[];
login:boolean=false;
  ngOnInit() {
    this.getAllCategories();
    this.ingLists=[""];
    this.preLists=[""];
  }
  getAllCategories(){
    if(sessionStorage.getItem("theUser")==null)
    this.login=true;
    else
    {
      this.password=JSON.parse(sessionStorage.getItem("theUser")).password;
      return this.recipeService.getAllCategories().subscribe(suc=>{
      this.categoriesList=suc;
      this.arive=true;
    }, err=>console.error());
    }
    
  }

  loginf(){
this.router.navigate(["Login"]);
  }

  addIngline(e, line:string){
  
    this.ingLists.pop();
    this.ingLists.push(line);
    this.ingLists.push("");
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  addPreline(e, line:string){
    
    this.preLists.pop();
    this.preLists.push(line);
    this.preLists.push("");
   
  }
  checkRecipe(){
    
    if(this.myNewRecipe.RecipePreperingTime>=0&&this.myNewRecipe.RecipePreperingTime<1000&&this.preLists[0]!=""&&this.ingLists[0]!="")
    {
      return true;
    }
    this.ifvalid=true;
    return false;
};
  addRecipe(){
    if(this.mypicture!=null)
      {
        this.myNewRecipe.RecipePicture="assets/new recipe.JPG";
      }
            if(this.checkRecipe())
              this.recipeService.addRecipe(this.myNewRecipe).subscribe(suc=>{
                alert("the recipe adden well!");
              }, err=>console.error());
                 
                 this.ingLists.pop();
                 document.getElementsByClassName("inglin")[length].remove();
                 this.preLists.pop();
                 document.getElementsByClassName("prelin")[length].remove();
            }

}
