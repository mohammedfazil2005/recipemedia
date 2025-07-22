import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllCount, allDownloadsType, allUsersType, CommonResponceType, ProfileImageType, RecipeArray, responceMessage, savedRecipeType, SavedRecipeType, testimonyResponceType, testimonyType, UserLoginType, UserRegisterType } from '../../interface/interface';
import { RecipeModel } from '../../admin/recipe-add/RecipeModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  // baseURL:string="http://localhost:3000"

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
    return this.http.get<RecipeArray[]>(`/getAllrecipes`)
  }

  onAddTestimony(body:testimonyType){
    return this.http.post(`/addtestimony`,body)
  }

  onRegisteUser(body:UserRegisterType){
    return this.http.post<UserRegisterType>(`/register`,body)
  }

  onLogin(body:{email:string,password:string}){
    return this.http.post<UserLoginType>(`/login`,body)
  }

  onFetchSingleRecipe(id:string){
    return this.http.get<RecipeArray>(`/getsinglerecipe/${id}`)
  }

  onFetchRelatedRecipe(query:string){
    return this.http.get<RecipeArray[]>(`/getrelatedrecipe?cuisine=${query}`)
  }

  onSaveRecipe(recipeID:String,body:SavedRecipeType){
    return this.http.post<CommonResponceType>(`/saverecipe?recipeID=${recipeID}`,body)
  }

  onFetchSavedRecipe(){
    return this.http.get<savedRecipeType[]>(`/savedrecipe`)
  }

  onDeleteSavedRecipe(recipeID:string){
    return this.http.delete<CommonResponceType>(`/delete/savedrecipe?recipeID=${recipeID}`)
  }

  onFetchProfile(){
    return this.http.get<ProfileImageType>(`/fetchprofile`)
  }

   onUpdateProfile(body:FormData){
    return this.http.patch<CommonResponceType>(`/update/profile`,body)
  }

  onGetAllUsers(){
    return this.http.get<allUsersType[]>(`/getusers`)
  }

  onDownloadRecipe(recipe:RecipeArray|null){
    return this.http.post<CommonResponceType>(`/onDownload/${recipe?._id}`,recipe)
  }

  onGetAllDownloads(){
    return this.http.get<allDownloadsType[]>(`/getalldownloads`)
  }

  onGetAllTestimonyRequest(){
    return this.http.get<testimonyResponceType[]>(`/getTestimonyrequest`)
  }

  onUpdateTestimony(id:string,query:string){
    return this.http.patch<responceMessage>(`/updateTestimony/${id}?status=${query}`,null)
  }

  onGetApprovedTestimony(){
    return this.http.get<testimonyResponceType[]>(`/getapprovedtestimonials`)
  }

  onGetCounts(){
    return this.http.get<AllCount>(`/getcount`)
  }

  onAddRecipe(body:RecipeModel){
    return this.http.post<CommonResponceType>(`/addrecipe`,body)
  }
  onDeleteRecipe(id:string){
    return this.http.post<CommonResponceType>(`/deleterecipe/${id}`,null)
  }
  onUpdateRecipe(id:string,body:RecipeModel){
    return this.http.patch<CommonResponceType>(`/updaterecipe/${id}`,body)
  }


  


}
