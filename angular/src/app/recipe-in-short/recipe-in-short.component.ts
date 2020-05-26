import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/Recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-in-short',
  templateUrl: './recipe-in-short.component.html',
  styleUrls: ['./recipe-in-short.component.css']
})
export class RecipeInShortComponent implements OnInit {

  constructor(public UserService:RecipesService) { }
  @Input()
  nowRecipeName: string;
  @Input()
  nowRecipePT: number;
  @Input()
  nowRecipeDL: number;
  @Input()
  nowRecipeImg: string;
  recipesArr=[];
  recipe:Recipe;
  hidden: boolean = false;
  hidden2:boolean=false;
  starsArr;

  stars() {
    this.starsArr=new Array(this.nowRecipeDL);
  }

  ngOnInit() {
    this.hidden = true;
    return this.UserService.getAllRecipes().subscribe(
      suc=>{
       
         this.recipesArr=suc;
          this.hidden=true;
          this.recipesArr.forEach(element => {
            if(element.RecipeName==this.nowRecipeName)
              {this.recipe=element;
              if(sessionStorage.getItem("theUser")!=null)
               this.hidden2=true;
              }})
            this.stars();}, 

       err=>{console.error();})
  }


}
