import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { addIngredients, CommonResponceType, RecipeArray } from '../../interface/interface';
import { RecipeModel } from './RecipeModel';

@Component({
  selector: 'app-recipe-add',
  standalone: false,
  templateUrl: './recipe-add.component.html',
  styleUrl: './recipe-add.component.css'
})
export class RecipeAddComponent {

  
  @Input() id!:string

  allCuisine: Array<string> = []
  dummyMealType: Array<string>[] = []
  allMealType: Array<string> = []
  newRecipe: RecipeModel|any = {};
  newIngreidents: Array<string> = []
  checkedMeals: Array<string> = []
  selectedArray:Array<string>=[]

  ngOnInit() {
    this.getRecipes()
    console.log(this.id)

  }

  constructor(private api: ApiService) {

  }

  getRecipes() {
    this.api.getAllRecipes().subscribe((res: RecipeArray[]) => {
      if(this.id){
       this.newRecipe=res.find((each:any)=>each._id==this.id)
       
       this.newIngreidents=this.newRecipe.ingredients
       this.checkedMeals=this.newRecipe.mealType
       this.selectedArray=this.checkedMeals
      }
      res.forEach((each: RecipeArray) => {
        !this.allCuisine.includes(each.cuisine) && this.allCuisine.push(each.cuisine)
        this.dummyMealType.push(each.mealType)
      })
      this.dummyMealType.flat().forEach((res: string) => {
        !this.allMealType.includes(res) && this.allMealType.push(res)
      })
    })

  }

  onAddIngredients(recipe: { value: string }) {

    if (recipe.value && recipe.value.trim() !== "") {
      
      this.newIngreidents.push(recipe.value.split('\n')[0])
      recipe.value = ""
    }
    this.newRecipe.ingredients = this.newIngreidents
  }

  onRemoveIngredients(val: string) {
    this.newIngreidents = this.newIngreidents.filter((each: string) => val != each)
  }

  onCheckBoxWorks(event: Event) {
    let targetValues = event.target as HTMLInputElement
    if (targetValues.checked) {
      if(!this.selectedArray.includes(targetValues.name)){
        this.checkedMeals.push(targetValues.name)
     this.selectedArray.push(targetValues.name)
      }
      
    } else {
      this.checkedMeals = this.checkedMeals.filter((res: string) => res != targetValues.name)
     
    }
    this.newRecipe.mealType = this.checkedMeals
  }

  onAddRecipeClick() {
    console.log(this.newRecipe)
    const { name,
      ingredients,
      prepTimeMinutes,
      cookTimeMinutes,
      servings,
      difficulty,
      cuisine,
      mealType,
      image,
      caloriesPerServing } = this.newRecipe
    if (name &&ingredients &&prepTimeMinutes &&cookTimeMinutes &&servings &&difficulty &&cuisine &&mealType &&image &&caloriesPerServing) {
      this.api.onAddRecipe(this.newRecipe).subscribe({
        next:(reason:CommonResponceType)=>{
          alert(reason.message)
        },
        error:(reason:CommonResponceType)=>{
          alert(reason.message)
        }
      })
    } else {
      alert("Please fill the form!")
    }
  }

onEdit(id:string){
    const { name,
      ingredients,
      prepTimeMinutes,
      cookTimeMinutes,
      servings,
      difficulty,
      cuisine,
      mealType,
      image,
      caloriesPerServing } = this.newRecipe
    if (name &&ingredients &&prepTimeMinutes &&cookTimeMinutes &&servings &&difficulty &&cuisine &&mealType &&image &&caloriesPerServing){
       this.api.onUpdateRecipe(id,this.newRecipe).subscribe((res:CommonResponceType)=>{
    alert(res.message)
  })
    }else{
      alert("Please fill the form!")
    }
 
}


}
