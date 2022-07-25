import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
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
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
        console.log(this.currentUser)
   }

   public get currentUserValue(): User{
    return this.currentUserSubject.value;
}
//signin
  public loginUserFromRemote(user: User): Observable<any> {
    return this.http.post<User>(environment.host + '/auth/signin', user)
    .pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
  }));

  }
//signup
 public registerUserFromRemote(user :User):Observable<any>
  {
    return this.http.post<User>(environment.host+'/auth/signup', user );
  }

  
  public setSession(authResult:any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('isConnected', 'true');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at') || '{}';
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
    
  }
   // remove user from local storage and set current user to nul
public logout() {
  localStorage.removeItem('currentUser');
  localStorage.clear()
// this.currentUserSubject.next();
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

  
  public  getToken()
  {
  localStorage.getItem('token');
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

 
}

