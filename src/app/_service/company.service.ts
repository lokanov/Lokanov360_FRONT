import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Abonnement } from '../_model/Abonnement';
import { Company } from '../_model/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  Companys: Company[] = [];

  constructor(private http: HttpClient)
   {

   }

   addCompany(company: Company):Observable<Company> {
    return this.http.post<Company>(environment.host+'/company/add', company);
   }

   getCompany():Observable<Company[]> {
    return this.http.get<Company[]>(environment.host+'/company/findAll');
   }
   getAbonnement():Observable<Abonnement[]> {
    return this.http.get<Abonnement[]>(environment.host+'/company/findAbonnement');
   }
 

   updateCompany(company: Company):Observable<Company> {
    return this.http.put<Company>(environment.host+'/company/update/'+company.id,company);
  }

  deleteCompany(company: Company):Observable<Company>{
    return this.http.delete<Company>(environment.host+'/company/delete/'+company.id);
  }}