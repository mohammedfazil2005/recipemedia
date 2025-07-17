import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { DownloadListComponent } from './download-list/download-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';

import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';
import { MatCard } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';



@NgModule({
  declarations: [
    DashboardComponent,
    UserListComponent,
    RecipeListComponent,
    DownloadListComponent,
    FeedbackListComponent,
    SidebarComponent,
    RecipeAddComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
  FormsModule,
  SearchPipe,
  MatCard,
  MatDatepickerModule,
 

  
    
    
  ]
})
export class AdminModule { }
