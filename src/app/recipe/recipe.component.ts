import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { RecipeArray } from '../interface/interface';
import { NgxPaginationModule } from 'ngx-pagination';

import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-recipe',
  imports: [NgxPaginationModule, SearchPipe, FormsModule, HeaderComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit{


  ngOnInit(): void {
    this.fetchAllRecipes()
    
  }

  allRecipes:RecipeArray[]=[]
  allCuisine:string[]=[]
  dummyMealType:string[][]=[]
  AllMealType:string[]=[]
  dummyRecipeArray:RecipeArray[]=[]
  currentPage:number=1
  searchKey:string=''

  constructor(private api:ApiService,private navigate:Router){}

  fetchAllRecipes(){
    this.api.getAllRecipes().subscribe((res:RecipeArray[])=>{
      this.allRecipes=res
      this.dummyRecipeArray=this.allRecipes

      this.allRecipes.forEach((each:{cuisine:string})=>{
        if(!this.allCuisine.includes(each.cuisine)){
          this.allCuisine.push(each.cuisine)
        }
      })

      this.dummyMealType=this.allRecipes.map((res:{mealType:string[]})=>{
        return res.mealType
      })

        this.dummyMealType.flat().map((res:string)=>{
        if(!this.AllMealType.includes(res)){
          this.AllMealType.push(res)
        }
      })

      

    

    })
  }
  

  filterRecipeByThereType(key:string,value:string){
    this.dummyRecipeArray=this.allRecipes.filter((each:any)=>each[key].includes(value))
  }

  onRecipeClick(id:string){
    if(sessionStorage.getItem("token")){
      this.navigate.navigateByUrl(`/view/${id}`)
    }else{
      alert("Please login to view recipe")
      this.navigate.navigateByUrl("/login")
    }
    
  }



}
