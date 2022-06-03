import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../_model/Category';
import { Surface } from '../_model/Surface';

@Injectable({
  providedIn: 'root'
})
export class SurfaceService {
  constructor(private http : HttpClient) { }

  getSurface():Observable<Surface[]> {
    return this.http.get<Surface[]>(environment.host+'/surface/findAll');
   }

   getSurfaceApp():Observable<Surface[]> {
    return this.http.get<Surface[]>(environment.host+'/surface/findByApp');
   }
   getSurfaceMaison():Observable<Surface[]> {
    return this.http.get<Surface[]>(environment.host+'/surface/findByMaison');
   }



   /*
   getByCategory(category: Category): Observable<Surface[]> {
    let params = new HttpParams()
    params =  params.append('name', category.name);
    return this.http.get<Surface[]>(environment.host+'/surface/findByCategory', {params: params});
}*/

  }
