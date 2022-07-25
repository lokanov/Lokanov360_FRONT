import { DatePipe } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Appointment } from 'src/app/_model/Appointment';
import { Category } from 'src/app/_model/Category';
import { Etage } from 'src/app/_model/Etage';
import { Surface } from 'src/app/_model/Surface';
import { AppointmentService } from 'src/app/_service/appointment.service';
import { CategoryService } from 'src/app/_service/category.service';
import { EtageService } from 'src/app/_service/etage.service';
import { SurfaceService } from 'src/app/_service/surface.service';
import {formatDate} from '@angular/common';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css'],
  providers: [DatePipe]
})
export class ListAppointmentComponent implements OnInit {

  appointments: Appointment[] = [];
 appointment: Appointment =  new Appointment();
  //appointmentNew: appointment = new appointment();
  appointmentUpdate: Appointment = new Appointment();
  //videos: Video[] = [];
  etages : Etage[] =[];
  categories: Category[] = [];
  surfaces: Surface[] = [];
  appointmentDelete: Appointment = new Appointment();

  modalRef: BsModalRef = new BsModalRef();
  currentDate = new Date();

  constructor( private router: Router, private appointmentService: AppointmentService, private modalService : BsModalService,private datePipe : DatePipe,
   private surfaceService : SurfaceService, private categoryService : CategoryService, private etageService : EtageService)
   {
   // this.myDate = this.datePipe.transform(this.myDate, 'yyyy/MM/dd');
    //(new Date(), 'yyyy/MM/dd', 'en');

    }


  ngOnInit(): void {
    this.loadReferences();
  }
  
  eC : any;
  eS : any;
  eE : any;

  config = {
    backdrop: false,
    animate: true,
    ignoreBackdropClick: true,
    class: 'modal-lg',
  };
    configC = {
    backdrop: false,
    animate: true,
    ignoreBackdropClick: true,
    class: 'modal-sm',
  };

  loadReferences()
  {
    this.appointmentService.getAppointment().subscribe(
      (value) => {
      this.appointments = value;
      console.log(this.appointments);
    });
    this.surfaceService.getSurface().subscribe(
      (value) => {
      this.surfaces = value;
    });
      

    this.etageService.getEtage().subscribe(
      (value) =>
      { 
        this.etages = value;
      }
        );
    //pour charger le select de la liste des category
    this.categoryService.getCategory().subscribe(
      (value) => {
      this.categories = value;
    });
}


templateConfirms(appointment: Appointment,template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, this.configC);
  this.confirm(appointment);
}
confirm(appointment: Appointment){
  this.appointmentDelete = appointment;
}
decline(){
  this.modalService.hide();
}


onDelete(appointment:Appointment){
  //this.modalService.hide();
  this.appointmentService.deleteAppointment(appointment).subscribe(
     (value) => {
       this.appointment = value;
       alert(' Votre Rendez_Vous a été annulé avec succés!!!');
       this.ngOnInit();
       console.log(this.appointment);
     }
  );

}




onSelectCategory(eC : any)
{
  if(eC.target.value == 2 || eC.target.value == 5)
  {
   //console.log("appartement à vendre")
   this.surfaceService.getSurfaceApp().subscribe(
     (value) =>
     {
       this.surfaces = value;
     }
   )
 this.surfaces = [];
  }
  if(eC.target.value == 3 || eC.target.value == 4)
  {
   //console.log("appartement à vendre")
   this.surfaceService.getSurfaceMaison().subscribe(
     (value) =>
     {
       this.surfaces = value;
     }
   )
   this.etageService.getEtage().subscribe(
    (value) => {
    this.etages = value;
     
  });

  }
  this.etages = [];
  
}

onSelectSurface(eS : any)
  {
    if(eS.target.value == 1)
  {
    if(this.appointment.category.id == 5)
    {
      this.appointment.montantTotal = 10000
    }
    if(this.appointment.category.id == 2)
    {
      this.appointment.montantTotal = 12000
    }
  }
  if(eS.target.value == 2)
  {
    if(this.appointment.category.id == 5)
    {
      this.appointment.montantTotal = 11000
     
    }
    
    if(this.appointment.category.id == 2)
    {
      this.appointment.montantTotal = 13000
    }
  }
  
  if(eS.target.value == 3)
  {
    if(this.appointment.category.id == 5)
    {
      this.appointment.montantTotal = 15000
    }
    if(this.appointment.category.id == 2)
    {
      this.appointment.montantTotal = 16000
    }
  }
  if(eS.target.value == 4)
  {
    if(this.appointment.category.id == 5)
    {
      this.appointment.montantTotal = 20000
    }
    if(this.appointment.category.id == 2)
    {
      this.appointment.montantTotal = 21000
    }
  }
//maison

  if(eS.target.value == 5)
  {
    if(this.appointment.etage.id == 1)
    {
      this.appointment.montantTotal = 70000
    }
    if(this.appointment.etage.id == 2)
    {
      this.appointment.montantTotal = 10000
    }
    if(this.appointment.etage.id == 3)
    {
      this.appointment.montantTotal = 80000
    }
  }
  if(eS.target.value == 6)
  {
    if(this.appointment.etage.id == 1)
    {
      this.appointment.montantTotal = 74000
    }
    if(this.appointment.etage.id == 2)
    {
      this.appointment.montantTotal = 20000
    }
    if(this.appointment.etage.id == 3)
    {
      this.appointment.montantTotal = 90000
    }
  }
  if(eS.target.value == 7)
  {
    if(this.appointment.etage.id == 1)
    {
      this.appointment.montantTotal = 75000
    }
    if(this.appointment.etage.id == 2)
    {
      this.appointment.montantTotal = 30000
    }
    if(this.appointment.etage.id == 3)
    {
      this.appointment.montantTotal = 85000
    }
  }

  }

  onSelectEtage(eE: any)
  {
    if(eE.target.value == 1)
    {
     {
      this.appointment.montantTotal=70000
     }
    }
    if(eE.target.value == 2)
    {
      this.appointment.montantTotal=10000
    }
    if(eE.target.value == 3)
    {
      this.appointment.montantTotal=80000
    }
   
  }

/*
formUpdate(appointment: Appointment,template: TemplateRef<any>) {
  this.appointmentUpdate = appointment;
  this.modalRef = this.modalService.show(template, this.config);
}

onUpdate() {
  //appointment.setId(this.appointmentUpdate.id);
  this.appointmentService.updateAppointment(this.appointmentUpdate).subscribe(
    () => {
      this.ngOnInit();
      alert('Votre Rendez-Vous a été modifié avec succés!!!');
        //this.router.navigate(['/list']);
        console.log(this.appointments);
    },
    (error) => {
      console.log(error);
    }
  );
}*/


//Facture Generation

onGenerateFacture(appointment: Appointment,template: TemplateRef<any>) {
  this.appointment = appointment;
  this.modalRef = this.modalService.show(template, this.config);
 
 

}

}
