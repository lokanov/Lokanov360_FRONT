import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_model/User';

import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new User();
  users: User[] = [];

  constructor(private http: HttpClient) { }

  registerUserFromRemote(user :User):Observable<User>
  {
    return this.http.post<User>(environment.host+'/auth/signup', user);
  }

  addUser(user: User):Observable<User> {
    return this.http.post<User>(environment.host+'/user/add', user);
   }

   getUser():Observable<User[]> {
    return this.http.get<User[]>(environment.host+'/user/findAll');
   }

   updateUser(user: User):Observable<User> {
    return this.http.put<User>(environment.host+'/user/update/'+user.id,user);
  }

  deleteUser(user: User):Observable<User>{
    return this.http.delete<User>(environment.host+'/user/delete/'+user.id);
  }

  setSession(authResult:any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('isConnected', 'true');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
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

