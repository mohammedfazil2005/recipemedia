import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';
import { UserRegisterType } from '../interface/interface';



@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm:FormGroup

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){
   this.registerForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]]
   })
  }

  onRegister(){
    if(this.registerForm.valid){
      this.api.onRegisteUser(this.registerForm.value).subscribe({
        next:(res:UserRegisterType)=>{
          this.router.navigateByUrl('/login')
        },
        error:(reason:UserRegisterType)=>{
          console.log(reason.error)
        }
      })
      this.registerForm.reset()
    }else{
      console.log("Login failed")
    }
  }

}
