import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { SavedRecipeComponent } from './saved-recipe/saved-recipe.component';
import { ProfileComponent } from './profile/profile.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,title:'Home'},
    {path:'about',component:AboutComponent,title:'About'},
    {path:'contact',component:ContactComponent,title:'Contact'},
    {path:'login',component:LoginComponent,title:'Login'},
    {path:'register',component:RegisterComponent,title:'Register'},
    {path:'allrecipes',component:RecipeComponent,title:'AllRecipes'},
    {path:'view/:id',component:ViewRecipeComponent,title:'View recipe'},
    {path:'savedRecipes',component:SavedRecipeComponent,title:"Saved Recipe"},
    {path:'profile',component:ProfileComponent,title:"Profile"},
    {path:'**',component:PnfComponent,title:"Page not found!"},
];
