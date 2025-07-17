import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllCount, allDownloadsType, allUsersType, CommonResponceType, ProfileImageType, RecipeArray, responceMessage, savedRecipeType, SavedRecipeType, testimonyResponceType, testimonyType, UserLoginType, UserRegisterType } from '../../interface/interface';
import { RecipeModel } from '../../admin/recipe-add/RecipeModel';

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

  onDeleteSavedRecipe(recipeID:string){
    return this.http.delete<CommonResponceType>(`${this.baseURL}/delete/savedrecipe?recipeID=${recipeID}`,this.appendToken())
  }

  onFetchProfile(){
    return this.http.get<ProfileImageType>(`${this.baseURL}/fetchprofile`,this.appendToken())
  }

   onUpdateProfile(body:FormData){
    return this.http.patch<CommonResponceType>(`${this.baseURL}/update/profile`,body,this.appendToken())
  }

  onGetAllUsers(){
    return this.http.get<allUsersType[]>(`${this.baseURL}/getusers`,this.appendToken())
  }

  onDownloadRecipe(recipe:RecipeArray|null){
    return this.http.post<CommonResponceType>(`${this.baseURL}/onDownload/${recipe?._id}`,recipe,this.appendToken())
  }

  onGetAllDownloads(){
    return this.http.get<allDownloadsType[]>(`${this.baseURL}/getalldownloads`,this.appendToken())
  }

  onGetAllTestimonyRequest(){
    return this.http.get<testimonyResponceType[]>(`${this.baseURL}/getTestimonyrequest`,this.appendToken())
  }

  onUpdateTestimony(id:string,query:string){
    return this.http.patch<responceMessage>(`${this.baseURL}/updateTestimony/${id}?status=${query}`,this.appendToken())
  }

  onGetApprovedTestimony(){
    return this.http.get<testimonyResponceType[]>(`${this.baseURL}/getapprovedtestimonials`,this.appendToken())
  }

  onGetCounts(){
    return this.http.get<AllCount>(`${this.baseURL}/getcount`,this.appendToken())
  }

  onAddRecipe(body:RecipeModel){
    return this.http.post<CommonResponceType>(`${this.baseURL}/addrecipe`,body,this.appendToken())
  }
  onDeleteRecipe(id:string){
    return this.http.post<CommonResponceType>(`${this.baseURL}/deleterecipe/${id}`,null,this.appendToken())
  }
  onUpdateRecipe(id:string,body:RecipeModel){
    return this.http.patch<CommonResponceType>(`${this.baseURL}/updaterecipe/${id}`,body,this.appendToken())
  }


  


}
