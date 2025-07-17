import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';



export const tokenguardGuard: CanActivateFn = (route, state) => {
  const router=inject(Router) //injecting router without Constructor

  if(sessionStorage.getItem("token")){
    return true
  }else{
    alert("Please Login!")
    router.navigateByUrl('/login')
    return false;
  }
};
