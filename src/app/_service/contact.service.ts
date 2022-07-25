import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../_model/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient,) { }

  public saveMessage(contact:Contact):Observable < Contact >{
    
    return this.http.post< Contact >(environment.host+'/contact/sendEmail',contact);
  }
  public lireMessage():Observable < any > {
    return this.http.get<any>('http://localhost:3000/api/sendMail');
  }
  public sendEmail(contact:Contact):Observable < Contact >{
    
    return this.http.post< Contact >(environment.host+'/contact/sendEmail',contact);
  }
}
