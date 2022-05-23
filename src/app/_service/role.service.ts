import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../_model/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  roles: Role[] = [];


  constructor( private http: HttpClient) { }

getRole():Observable<Role[]> {

 return this.http.get<Role[]>(environment.host+'/role/findAll');
}

deleteVideo(role: Role):Observable<Role>{
 return this.http.delete<Role>(environment.host+'/role/delete/'+role.id);
}
}
