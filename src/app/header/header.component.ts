import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  username:string=''

  ngOnInit(){
    if(sessionStorage.getItem("token")){
      this.username=sessionStorage.getItem("username")||""
    }
  }

}
