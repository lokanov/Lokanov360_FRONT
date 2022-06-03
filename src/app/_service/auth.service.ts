import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_model/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  user = new User();
  users: User[] = [];

 requestHeader =  new HttpHeaders(
   {
     "No-Auth" : "True"
   }
 );

 private currentUserSubject: BehaviorSubject<User>;
 public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
        console.log(this.currentUser)
   }

  public loginUserFromRemote(user: User): Observable<any> {
    return this.http.post<User>(environment.host + '/auth/signin', user)
  }

  registerUserFromRemote(user :User):Observable<User>
  {
    return this.http.post<User>(environment.host+'/auth/signup', user );
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

  getToken()
  {
    localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('isConnected');
    localStorage.clear();
     this.isLoggedOut();
    //this.router.navigate(['/login'])
  }
  loggdIn()
  {
   !!localStorage.getItem('token');
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

