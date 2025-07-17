import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { CommonResponceType, RecipeArray, responceMessage } from '../interface/interface';
import { HttpErrorResponse } from '@angular/common/http';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-view-recipe',
  imports: [RouterLink, HeaderComponent],
  templateUrl: './view-recipe.component.html',
  styleUrl: './view-recipe.component.css'
})
export class ViewRecipeComponent {


  constructor(private route: ActivatedRoute, private api: ApiService,private router:Router) { }

  recipeID: string = ""
  recipe: RecipeArray | null = null
  relatedCusine: RecipeArray[] | null = null;
  


  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.recipeID = res['id']

       console.log(this.recipeID)
    this.getSingleRecipe()
    })
   



  }


  // view recipe
  getSingleRecipe() {

    this.api.onFetchSingleRecipe(this.recipeID).subscribe((res: RecipeArray) => {
      this.recipe = res

      this.api.onFetchRelatedRecipe(res.cuisine).subscribe((res: RecipeArray[]) => {

        if(res.length>0){
           this.relatedCusine=res
     this.relatedCusine=this.relatedCusine.filter((each:RecipeArray)=>each._id!=this.recipeID)
        }else{
          this.relatedCusine=[]
        }

      })


    })


  }

  // save recipe

  onSaveRecipe(){
     let recipeObject={recipeName:this.recipe?.name,recipeImage:this.recipe?.image}
     this.api.onSaveRecipe(this.recipeID,recipeObject).subscribe({
      next:(res:CommonResponceType)=>{
        alert(res.message)
      },
      error:(res:HttpErrorResponse)=>{
    
        alert(res.error.message)
      }
     })


  }

  // generate PDF

  onGeneratePDF(res:RecipeArray|null){
    console.log(res)
    const pdf=new jsPDF()
    pdf.setFontSize(16)
    pdf.setTextColor("red")
    pdf.text(this.recipe?.name||"jsPDF",10,10)

    pdf.setFontSize(12)
    pdf.setTextColor('black')
    pdf.text(`Cusine :${this.recipe?.cuisine}`,10,20)
    pdf.text(`Mode of cooking : ${this.recipe?.difficulty}`,10,35)
    pdf.text(`Total prepartion time :${this.recipe?.prepTimeMinutes}`,10,45)
    pdf.text(`Total cooking time :${this.recipe?.cookTimeMinutes}`,10,55)

    let head=[['Ingredients needed']]
    let body=[]
    body.push([this.recipe?.ingredients||null])
    
    autoTable(pdf,{head,body,startY:70,})

    this.api.onDownloadRecipe(res).subscribe((res:CommonResponceType)=>{
      alert(res.message)
       pdf.output('dataurlnewwindow')
    pdf.save(`${this.recipe?.name}.pdf`)
    })



   

    



  }

  onRelatedClick(id:string){
    console.log(id)
    this.router.navigateByUrl(`/view/${id}`)
  } 




}
