import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../_model/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private http: HttpClient)
  {
 
  }

  addAppointment(appointment: Appointment):Observable<Appointment> {
   return this.http.post<Appointment>(environment.host+'/appointment/add', appointment);
  }
 
  getAppointment():Observable<Appointment[]> {
   return this.http.get<Appointment[]>(environment.host+'/appointment/findAll');
  }
 
  updateAppointment(appointment: Appointment):Observable<Appointment> {
   return this.http.put<Appointment>(environment.host+'/appointment/update/'+appointment.id,appointment);
 }
 
 deleteAppointment(appointment: Appointment):Observable<Appointment>{
   return this.http.delete<Appointment>(environment.host+'/appointment/delete/'+appointment.id);
 }

}