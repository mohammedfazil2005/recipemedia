import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api/api.service';
import { CommonResponceType, ProfileImageType } from '../interface/interface';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-profile',
  imports: [FormsModule, HeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  ngOnInit(){
    this.fetchProfile()
  }

  imageInput:string|ProfileImageType=""
  imageFile:File|string=''
  url:string=""

  constructor(private api:ApiService){}
  


  fetchProfile(){
    this.api.onFetchProfile().subscribe((res:ProfileImageType)=>{
      console.log(res)
      if(res.image){
        this.imageInput='http://localhost:3000/'+'/uploads/'+res.image
      }else{
        this.imageInput=""
      }
    })
   
  }

  onProfileChange(event:Event){

    const {files}=event.target as HTMLInputElement
    
    if(files){

      // created instance
      const instance=URL.createObjectURL(files[0])
      this.imageFile=files[0]
     this.imageInput=instance
     

    }

  }

  onUpdateClick(){
    if(this.imageFile){
      const form=new FormData()

    form.append("image",this.imageFile)
    this.api.onUpdateProfile(form).subscribe((res:CommonResponceType)=>{
      alert(res.message||res.error)
      this.fetchProfile()
    })
    
    }
  }








}
