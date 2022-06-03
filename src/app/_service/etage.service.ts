import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etage } from '../_model/Etage';

@Injectable({
  providedIn: 'root'
})
export class EtageService {

  constructor(private http : HttpClient) { }

  getEtage():Observable<Etage[]> {
    return this.http.get<Etage[]>(environment.host+'/etage/findAll');
   }
}
