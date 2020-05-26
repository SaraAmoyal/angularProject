
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeInShortComponent } from './recipe-in-short/recipe-in-short.component';
import { timePipe } from 'src/timePipe';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { ContactComponent } from './contact/contact.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import {AddComponent} from './add/add.component';

@NgModule({
  declarations: [
     AllRecipesComponent,
     RecipeInShortComponent,
     AddRecipeComponent,
     RecipeDetailsComponent,
     timePipe,
     EditRecipeComponent,
     LoginComponent,
    RegisterComponent,
    ContactComponent,
    AddComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
