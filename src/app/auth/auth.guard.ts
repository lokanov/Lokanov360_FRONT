import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private  authService : AuthService, private router: Router)
  {

  }
  canActivate(): boolean
  {

    if (this.authService.isLoggedIn()) {
      // logged in so return true
      return true;
    }

    else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/home'])
      return false;
      }
  }
    /*
    if(localStorage.getItem('isConnected'))
    {
      //this.router.navigate(['/dashboard'])
      console.log(localStorage.getItem('isConnected'))
      return true;
    }
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }*/

}
