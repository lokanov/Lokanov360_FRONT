import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { filter, findIndex, pipe } from 'rxjs';
import { Appointment } from 'src/app/_model/Appointment';
import { Bien } from 'src/app/_model/Bien';
import { Category } from 'src/app/_model/Category';
import { Etage } from 'src/app/_model/Etage';
import { Surface } from 'src/app/_model/Surface';
import { Visit } from 'src/app/_model/Visit';
import {AppointmentService } from 'src/app/_service/appointment.service';
import { BienService } from 'src/app/_service/bien.service';
import { CategoryService } from 'src/app/_service/category.service';
import { EtageService } from 'src/app/_service/etage.service';
import { SurfaceService } from 'src/app/_service/surface.service';

@Component({
  selector: 'app-add-appointement',
  templateUrl: './add-appointement.component.html',
  styleUrls: ['./add-appointement.component.css']
})
export class AddAppointementComponent implements OnInit {


 
  categorys: Category[] = [];
  biens: Bien[] = [];
  surfaces : Surface[] = [];
  etages: Etage[] = [];
  appointments : Appointment[] = [];
  mnt : any;
  appointment : Appointment = new Appointment ();
  category = new Category();
  bien = new Bien();
  surface = new Surface();
  etage = new Etage();

  constructor( private categoryService : CategoryService, private surfaceService: SurfaceService, 
    private etageService: EtageService, private bienService : BienService, private appointmentService : AppointmentService) { }

  ngOnInit(): void {
    this.loadReferences();
  }
  eC : any;
  eS : any;
  eE : any;

  

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
 // this.etages = [];
  
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

       if(this.appointment.surface.id==5)
       {
      this.appointment.montantTotal=70000
       }
       if(this.appointment.surface.id==6)
       {
      this.appointment.montantTotal=74000
       }
       if(this.appointment.surface.id==7)
       {
      this.appointment.montantTotal=75000
       }
     
    }
    if(eE.target.value == 2)
    {
      if(this.appointment.surface.id==5)
       {
      this.appointment.montantTotal=10000
       }
       if(this.appointment.surface.id==6)
       {
      this.appointment.montantTotal=20000
       }
       if(this.appointment.surface.id==7)
       {
      this.appointment.montantTotal=30000
       }
    }
    if(eE.target.value == 3)
    {
      if(this.appointment.surface.id==5)
       {
      this.appointment.montantTotal=80000
       }
       if(this.appointment.surface.id==6)
       {
      this.appointment.montantTotal=90000
       }
       if(this.appointment.surface.id==7)
       {
      this.appointment.montantTotal=85000
       }
    }
   
  }
 

  loadReferences()
  {
    //pour charger le select de la liste des category
    this.categoryService.getCategory().subscribe(
      (value) => {
      this.categorys = value;
    });
   
   
   

}

  onCreateAppointement(appointment : Appointment)
  {
   this.appointmentService.addAppointment(appointment).subscribe(
     (value) => 
     {
      this.appointment = value;
      //alert(' Votre Rendez Vous a été ajouté avec succés!!!');
      //this.ngOnInit();
      //this.router.navigate(['/list-video']);
      console.log(this.appointment);
    },
     (_error) => {
      console.log('error');
    }
   )
   alert('Rendez-Vous  ajoutée avec succés!!!');
   window.location.reload()
  }


}
