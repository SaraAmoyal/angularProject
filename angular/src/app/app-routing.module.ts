import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { ContactComponent } from './contact/contact.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:'', component:AllRecipesComponent},
  {path:'All-recipes',component:AllRecipesComponent},
  {path:'All-recipes/app-recipe-in-short/:na/:pt/:dl/:img',component:AllRecipesComponent},
  {path:'Login', component:LoginComponent},  
  {path:'Register', component:RegisterComponent},
  {path:'Add', component:AddComponent}, 
  {path:'Recipe-Details/:name', component:RecipeDetailsComponent},
  {path:'Edit-Recipe/:name', component:EditRecipeComponent},
  {path:'Contact', component:ContactComponent}, 
  {path:'Add', component:AddComponent}
];

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
