import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { DownloadListComponent } from './download-list/download-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,title:'Admindashboard'},
  {path:'downloadlist',component:DownloadListComponent,title:'Download-List'},
  {path:'recipelist',component:RecipeListComponent,title:'Recipe-List'},
  {path:'userlist',component:UserListComponent,title:'User-List'},
  {path:'feedbacklist',component:FeedbackListComponent,title:'Feedback-List'},
  {path:'recipeadd',component:RecipeAddComponent,title:'Recipe-Add'},
  {path:'recipeedit/:id',component:RecipeAddComponent,title:'Recipe-Edit'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
