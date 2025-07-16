
 export interface RecipeArray{
    name:string,
    ingredients:string[],
    instructions:string[],
    prepTimeMinutes:string,
    cookTimeMinutes:string,
    servings:number,
    difficulty:string,
    cuisine:string,
    mealType:string[],
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