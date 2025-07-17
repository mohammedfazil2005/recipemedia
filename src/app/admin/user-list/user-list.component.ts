import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { allUsersType } from '../../interface/interface';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  allUsers:allUsersType[]=[]

  ngOnInit(){
    this.onFetchUsers()
  }

  constructor(private api:ApiService){}


  onFetchUsers(){
    this.api.onGetAllUsers().subscribe((res:allUsersType[])=>{
      
      this.allUsers=res
    })
  }

}
