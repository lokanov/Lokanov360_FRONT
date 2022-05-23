import { User } from '../_model/User';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

import * as moment from 'moment';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/shareReplay';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = new User();
  users: User[] = [];

  constructor(private _http: HttpClient) {}

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<User>(environment.host + '/auth/signin', user)
  }

  setSession(authResult:any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('isConnected', 'true');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('isConnected');
    localStorage.clear();
     this.isLoggedOut();
    //this.router.navigate(['/login'])
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public isLoged(){
    return localStorage.getItem("isConnected")
  }

  public logged()
  {
    return localStorage.getItem("isConnected")
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at') || '{}';
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
