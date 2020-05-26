import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/User';
import { Observable } from 'rxjs';
import { Recipe } from 'src/Recipe';
import { Category } from 'src/Category';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(public httpItem:HttpClient) { }

  lookForUser(name, password):Observable<number>{
    return this.httpItem.get<number>(`http://localhost:55434/api/User/lookForUser?name=${name}&password=${password}`);
  }
  registerMe(user:User):Observable<void>
  {
    debugger
    return this.httpItem.get<void>("http://localhost:55434/api/User/insert?u="+user);
  }
  getAllUsers():Observable<User[]>
  {
    return this.httpItem.get<User[]>("http://localhost:55434/api/User/getAllUsers");
  }
  addRecipe(recipe:Recipe):Observable<any>
  {
    debugger
    return this.httpItem.post<any>("http://localhost:55434/api/Recipe/addRecipe",recipe);
  }
  removeRecipe(recipename:string):Observable<void>
  {
    debugger
    return this.httpItem.get<any>("http://localhost:55434/api/Recipe/DelRecipe?recipename="+recipename);
  }
  getAllRecipes():Observable<Recipe[]>
  {
    return this.httpItem.get<Recipe[]>("http://localhost:55434/api/Recipe/getAllRecipes");
  }
  getAllCategories():Observable<Category[]>
  {
    return this.httpItem.get<Category[]>("http://localhost:55434/api/Category/getAllCategories");
  }
}
