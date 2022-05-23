import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Abonnement } from '../_model/Abonnement';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  abonnements: Abonnement[] = [];

  constructor(private http: HttpClient)
   {

   }

   addAbonnement(abonnement: Abonnement):Observable<Abonnement> {
    return this.http.post<Abonnement>(environment.host+'/abonnement/add', abonnement);
   }
   
   getAbonnement():Observable<Abonnement[]> {
    return this.http.get<Abonnement[]>(environment.host+'/abonnement/findAll');
   }

   updateAbonnement(abonnement: Abonnement):Observable<Abonnement> {
    return this.http.put<Abonnement>(environment.host+'/abonnement/update/'+abonnement.id,abonnement);
  }

  deleteAbonnement(abonnement: Abonnement):Observable<Abonnement>{
    return this.http.delete<Abonnement>(environment.host+'/abonnement/delete/'+abonnement.id);
  }
}