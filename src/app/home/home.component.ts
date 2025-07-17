import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { RecipeArray, testimonyResponceType } from '../interface/interface';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-home',
  imports: [RouterLink, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

 
export class HomeComponent  implements OnInit{

  ngOnInit(): void {
    this.fetchAllRecipes()
    this.fetchApprovedTestimony()
  }

  allRecipes:RecipeArray[]=[]
  testimonies:testimonyResponceType[]=[]

  constructor(private api:ApiService){}

  fetchAllRecipes(){
    this.api.getAllRecipes().subscribe((res:RecipeArray[])=>{
      this.allRecipes=res.slice(0,6)
      // console.log(this.allRecipes)
    })
  }

  fetchApprovedTestimony(){
    this.api.onGetApprovedTestimony().subscribe((res:testimonyResponceType[])=>{
      this.testimonies=res
    })
  }

}
