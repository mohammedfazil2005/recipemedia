
 export interface RecipeArray{
    name:string,
    ingredients:string[],
    instructions:string[],
    prepTimeMinutes:string,
    cookTimeMinutes:string,
    servings:number,
    difficulty:string,
    cuisine:string,
    mealType:Array<string>,
    image:string,
    _id:string,
    caloriesPerServing:number
    

  }


  export interface testimonyType{
    name:string,
    email:string|number
    message:string|number
  }

export interface UserRegisterType{
  username:string,
  email:string|number,
  password:string|number
  error:string
}



export interface UserLoginType{
  email:string|number,
  password:string|number
  error:string,
  token:string,
  message:string
  username:string
  userRole:string
}

export interface responceMessage{
  message:string
}


export interface SavedRecipeType{
  recipeImage:string|undefined,
  recipeName:string|undefined
}

export interface CommonResponceType{
  message:string
  error:string
}

export interface savedRecipeType{
  _id:string,
  recipeID:string,
  recipeImage:string,
  recipeName:string
  userID:string
}

export interface ProfileImageType{
  image:string
}

export interface allUsersType{
  username:string,
  email:string
}

export interface allDownloadsType{
  recipeName:string,
  recipeImage:string,
  recipeID:string,
  recipeCuisine:string,
  count:number
}

export interface testimonyResponceType{
  email:string,
  message:string,
  name:string,
  status:string,
  _id:string
}

export interface AllCount{
  userCount:number,
  recipeCount:number,
  feedbackCount:number,
  downloadCount:number
}

export interface addIngredients{
  ingredeints:string
}