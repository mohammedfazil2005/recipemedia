import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api/api.service';
import { UserLoginType } from '../interface/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){
    this.loginForm=this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]]
    })
  }

  onLogin(){
  if(this.loginForm.valid){
      this.api.onLogin(this.loginForm.value).subscribe({
        next:(res:UserLoginType)=>{
          sessionStorage.setItem("token",res.token)
          sessionStorage.setItem("username",res.username)
          if(res.userRole=="user"){
            this.router.navigateByUrl('/')
          }else{
            // 
          }
        },
        error:(reason:{error:string})=>{
          console.log(reason.error)
        }
      })
  }else{
    alert("Please check the form")
  }
  }



}
