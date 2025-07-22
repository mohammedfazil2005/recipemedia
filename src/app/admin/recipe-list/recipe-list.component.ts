import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { CommonResponceType, RecipeArray } from '../../interface/interface';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  allRecipes:RecipeArray[]=[]
  cpage:number=1
  searchKey:string=""

  ngOnInit(){
    this.fetchAllRecipes()
  }

  constructor(private api:ApiService){}

  fetchAllRecipes(){
    this.api.getAllRecipes().subscribe((res:RecipeArray[])=>{
      console.log(res)
      this.allRecipes=res
    })
  }

  deleteRecipe(id:string){
    this.api.onDeleteRecipe(id).subscribe((res:CommonResponceType)=>{
      console.log(res)
      alert(res.message)
      this.fetchAllRecipes()
    })
  }




}
