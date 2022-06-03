import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bien } from '../_model/Bien';

@Injectable({
  providedIn: 'root'
})
export class BienService {


constructor(private http: HttpClient)
 {

 }

 addBien(bien: Bien):Observable<Bien> {
  return this.http.post<Bien>(environment.host+'/bien/add', Bien);
 }

 getBien():Observable<Bien[]> {
  return this.http.get<Bien[]>(environment.host+'/bien/findAll');
 }

 getMontantAppLoc():Observable<Bien[]> {
  return this.http.get<Bien[]>(environment.host+'/bien/findByMontantAppLoc');
 }
/*
 updateBiern(Biern: Biern):Observable<Biern> {
  return this.http.put<Biern>(environment.host+'/Biern/update/'+Biern.id,Biern);
}*/
/*
deleteBiern(Biern: Biern):Observable<Biern>{
  return this.http.delete<Biern>(environment.host+'/Biern/delete/'+Biern.id);
}*/

}
