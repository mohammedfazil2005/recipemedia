import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { AllCount } from '../../interface/interface';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isSideBar:boolean=true
  dashboardClass:string="col-10 ps-0"
  userCount:number=0
  recipeCount:number=0
  feedbackCount:number=0
  downloadsCount:number=0
  selected:Date=new Date()
  

  ngOnInit(){
    this.onFetchCount()
   
  }

  constructor(private router:Router,private api:ApiService){}

  menuClick(){
    this.isSideBar=!this.isSideBar
    this.isSideBar?this.dashboardClass="col-10 ps-0":this.dashboardClass="col-12 ps-0"
  }

  onLogout(){
    sessionStorage.clear()
    this.router.navigateByUrl('/')
  }

  onFetchCount(){
    return this.api.onGetCounts().subscribe((res:AllCount)=>{
     this.userCount=res.userCount
     this.recipeCount=res.recipeCount
     this.feedbackCount=res.feedbackCount
     this.downloadsCount=res.downloadCount
    })
  }

}
