import { Injectable } from '@angular/core';
import { Visit } from '../_model/Visit';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { Category } from '../_model/Category';


@Injectable({
  providedIn: 'root'
})
export class VisitService {

  visits: Visit[] = [];
  visit: Visit = new Visit();

constructor(private http: HttpClient)
 {

 }

 addVisit(visit: Visit):Observable<Visit> {
  return this.http.post<Visit>(environment.host+'/visit/add', visit);
 }

 getVisit():Observable<Visit[]> {
  return this.http.get<Visit[]>(environment.host+'/visit/findAll');
 }

 updateVisit(visit: Visit):Observable<Visit> {
  return this.http.put<Visit>(environment.host+'/visit/update/'+visit.id,visit);
}

deleteVisit(visit: Visit):Observable<Visit>{
  return this.http.delete<Visit>(environment.host+'/visit/delete/'+visit.id);
}

getVisitByCategory(category: Category): Observable<Visit[]> {
  let params = new HttpParams()
  params =  params.append('name', category.name);
  return this.http.get<Visit[]>(environment.host+'/visit/findByCategory', {params: params});
}

}
