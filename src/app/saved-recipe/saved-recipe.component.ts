import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ApiService } from '../services/api/api.service';
import { CommonResponceType, responceMessage, savedRecipeType } from '../interface/interface';

@Component({
  selector: 'app-saved-recipe',
  imports: [HeaderComponent],
  templateUrl: './saved-recipe.component.html',
  styleUrl: './saved-recipe.component.css'
})
export class SavedRecipeComponent {

  ngOnInit(){
    this.getSavedRecipe()
  }

  constructor(private api:ApiService){}

  savedRecipes:savedRecipeType[]|null=null

  getSavedRecipe(){
    this.api.onFetchSavedRecipe().subscribe((res:savedRecipeType[])=>{
      this.savedRecipes=res
      // console.log(res)
    })
  }

  // delete saved recipe

  deleteRecipe(recipeID:string){
    this.api.onDeleteSavedRecipe(recipeID).subscribe((res:CommonResponceType)=>{
      alert(res.message)
      this.getSavedRecipe()
    })
  }

}
