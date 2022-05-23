import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../_service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private loginService: LoginService, private router: Router)
  {

  }

 
 
  canActivate(): boolean
  {
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
  }

}
