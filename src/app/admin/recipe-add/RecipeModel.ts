export class RecipeModel{
    name?:string
    ingredients?:Array<string>
    instructions?:Array<string>
    prepTimeMinutes?:number
    cookTimeMinutes?:number
    servings?:number
    difficulty?:string
    cuisine?:string
    mealType?:Array<string>
    image?:string
    caloriesPerServing?:number
}