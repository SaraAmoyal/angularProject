import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/Recipe';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(public UserService: RecipesService, public active: ActivatedRoute) { }

  recipename: string;
  nowRecipe: Recipe;
  recipesArr = [];
  usersArr=[];
  userCode;
  hidden: boolean = false;
  starstr = "";
  i: number = 0;
starsArr;
itsMe:boolean=false;

  stars() {
    this.starsArr=new Array(this.nowRecipe.RecipeDifficultLevel);
  }

  checkIfItsMe(){
  this.UserService.getAllUsers().subscribe(
                       suc=>{
                               this.usersArr=suc;
                               this.usersArr.forEach(element => 
                                {  
                                  
                                   if (element.userName == JSON.parse(sessionStorage.getItem("theUser")).name)
                                    this.userCode = element.userPassword;
                               });
                               if(this.userCode==this.nowRecipe.RecipeuserCode)
                                   this.itsMe=true;
                       },
                       erro=>{console.error();});
}                      
                      
  ngOnInit() {
    this.active.params.subscribe(suc => {
      this.recipename = suc['name']
      return this.UserService.getAllRecipes().subscribe(
        succees => {
          
                     this.recipesArr = succees;
                     this.recipesArr.forEach(element => 
                      {  
                         if (element!=null&&element.RecipeName == this.recipename)
                          this.nowRecipe = element;
                     });
                     this.stars();
                     this.checkIfItsMe();
                     this.hidden = true;
                    },
        err => { 
                 console.log(err); 
               })
   },
  err=>{console.log(err);});

 
  }
  goToEdit() {
    window.location.href = "http://localhost:4200/Edit-Recipe/"+this.nowRecipe.RecipeName;
  }
}
