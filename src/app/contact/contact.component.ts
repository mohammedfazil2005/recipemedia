import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api/api.service';
import { testimonyType } from '../interface/interface';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  testimony:FormGroup

  constructor(private fb:FormBuilder,private api:ApiService){
    this.testimony=this.fb.group({
      name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email:['',[Validators.email,Validators.required]],
      message:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]
    })
  }

  onFormSubmit(){
    if(this.testimony.valid){
     this.api.onAddTestimony(this.testimony.value).subscribe(()=>{
      alert("Testimony added wait for the admin responce!")
      this.testimony.reset()
     })
    }else{
      alert("Login failed!")
    }
  }


}
