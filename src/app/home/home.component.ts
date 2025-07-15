import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { RecipeArray } from '../interface/interface';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

 
export class HomeComponent  implements OnInit{

  ngOnInit(): void {
    this.fetchAllRecipes()
  }

  allRecipes:RecipeArray[]=[]

  constructor(private api:ApiService){}

  fetchAllRecipes(){
    this.api.getAllRecipes().subscribe((res:RecipeArray[])=>{
      this.allRecipes=res.slice(0,6)
      console.log(this.allRecipes)
    })
  }

}
