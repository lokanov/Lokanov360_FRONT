import { Lieu } from './../_model/Lieu';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LieuService {
  lieus: Lieu[] = [];

  constructor(private http: HttpClient)
   {

   }

   addLieu(lieu: Lieu):Observable<Lieu> {
    return this.http.post<Lieu>(environment.host+'/lieu/add', lieu);
   }

   getLieu():Observable<Lieu[]> {
    return this.http.get<Lieu[]>(environment.host+'/lieu/findAll');
   }

   updateLieu(lieu: Lieu):Observable<Lieu> {
    return this.http.put<Lieu>(environment.host+'/lieu/update/'+lieu.id,lieu);
  }

  deleteLieu(lieu: Lieu):Observable<Lieu>{
    return this.http.delete<Lieu>(environment.host+'/lieu/delete/'+lieu.id);
  }
}