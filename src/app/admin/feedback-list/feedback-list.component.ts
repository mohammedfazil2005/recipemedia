import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { CommonResponceType, responceMessage, testimonyResponceType } from '../../interface/interface';

@Component({
  selector: 'app-feedback-list',
  standalone: false,
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.css'
})
export class FeedbackListComponent {

  ngOnInit(){
    this.onFetchFeedback()
  }

  allFeedbacks:testimonyResponceType[]=[]

  constructor(private api:ApiService){}

  onFetchFeedback(){
    this.api.onGetAllTestimonyRequest().subscribe({
      next:(res:testimonyResponceType[])=>{
        this.allFeedbacks=res
      },
      error:(reason:CommonResponceType)=>{
        console.log(reason.error)
      }
    })
  }

  onUpdate(id:string,query:string){
    this.api.onUpdateTestimony(id,query).subscribe((res:responceMessage)=>{
     alert(res.message)
      this.onFetchFeedback()
    })
   
  }

}
