import { Modality } from './../_model/Modality';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalityService {
  modalitys: Modality[] = [];

  constructor(private http: HttpClient)
   {

   }

   addModality(modality: Modality):Observable<Modality> {
    return this.http.post<Modality>(environment.host+'/modality/add', modality);
   }

   getModality():Observable<Modality[]> {
    return this.http.get<Modality[]>(environment.host+'/modality/findAll');
   }
   
   updateModality(modality: Modality):Observable<Modality> {
    return this.http.put<Modality>(environment.host+'/modality/update/'+modality.id,modality);
  }

  deleteModality(modality: Modality):Observable<Modality>{
    return this.http.delete<Modality>(environment.host+'/modality/delete/'+modality.id);
  }
}