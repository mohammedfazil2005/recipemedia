import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonResponceType, RecipeArray, responceMessage, savedRecipeType, SavedRecipeType, testimonyType, UserLoginType, UserRegisterType } from '../../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseURL:string="http://localhost:3000"

  constructor(private http:HttpClient) { }

  appendToken(){
    let headers=new HttpHeaders()
    let token=sessionStorage.getItem("token")
    if(token){
     headers= headers.append("Authorization",`bearer ${token}`)
    }
    return {headers}
  }

  getAllRecipes(){
    return this.http.get<RecipeArray[]>(`${this.baseURL}/getAllrecipes`)
  }

  onAddTestimony(body:testimonyType){
    return this.http.post(`${this.baseURL}/addtestimony`,body)
  }

  onRegisteUser(body:UserRegisterType){
    return this.http.post<UserRegisterType>(`${this.baseURL}/register`,body)
  }

  onLogin(body:{email:string,password:string}){
    return this.http.post<UserLoginType>(`${this.baseURL}/login`,body)
  }

  onFetchSingleRecipe(id:string){
    return this.http.get<RecipeArray>(`${this.baseURL}/getsinglerecipe/${id}`,this.appendToken())
  }

  onFetchRelatedRecipe(query:string){
    return this.http.get<RecipeArray[]>(`${this.baseURL}/getrelatedrecipe?cuisine=${query}`,this.appendToken())
  }

  onSaveRecipe(recipeID:String,body:SavedRecipeType){
    return this.http.post<CommonResponceType>(`${this.baseURL}/saverecipe?recipeID=${recipeID}`,body,this.appendToken())
  }

  onFetchSavedRecipe(){
    return this.http.get<savedRecipeType[]>(`${this.baseURL}/savedrecipe`,this.appendToken())
  }


}
