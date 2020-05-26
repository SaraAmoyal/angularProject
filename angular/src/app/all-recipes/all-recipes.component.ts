import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/Recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  constructor(public UserService:RecipesService) { }
  recipesArr=[];
  hidden:boolean=false;
  Sname:string="";
  Stime:number=0;
  Scategory:string="";
  finded:boolean=false;
  categoriesList;
  arive:boolean=false;
hidd:boolean=false;
findtasks:Recipe[]=[];
notRaesults:boolean=false;
finded1=false;

  ngOnInit() {
    console.log(this.hidden)
   
    return this.UserService.getAllRecipes().subscribe(
      suc=>{this.recipesArr=suc;
            this.getAllCategories();
            if(this.arive==true)
              this.hidden=true;
            else this.hidd=true},
       err=>{console.error();})
  }


  getAllCategories(){
   return this.UserService.getAllCategories().subscribe(suc=>{
      this.categoriesList=suc;
      if(this.hidd==true)
         this.hidden=true;
         else
         this.arive=true;
    }, err=>console.error());
  }

 sort(){
   this.notRaesults=false;
   this.finded=false;
   
   while(this.findtasks.length>0) {
     this.findtasks.pop();
   };
   
  this.recipesArr.forEach(x => {
    if(x!=null)
    {if(((this.Sname=="")||(x.RecipeName==this.Sname)))
      {
        if(((!this.Stime)||(x.RecipePreperingTime<=this.Stime)))
        {
          if(((this.Scategory=="")||(x.RecipeCategory==this.Scategory)))
          this.findtasks.push(x);
        }
      } 
  };});
   if(this.findtasks.length>0) 
      {
        this.finded=true;
        this.finded1=true;
      } 
       else
      { this.finded=true;
       this.notRaesults=true;}
  
}
  
 
}



  
