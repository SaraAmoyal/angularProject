export class Recipe{
    constructor(public RecipeName:string, public RecipeCategory:string, 
        public RecipePreperingTime:number, public RecipeDifficultLevel:number,
         public RecipeAddDate:Date,public RecipeIngredients:string[],
          public RecipePreparation:string[], public RecipeuserCode:string,
          public RecipePicture:string, public RecipeIf:boolean){}
}


    