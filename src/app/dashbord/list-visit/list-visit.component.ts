import { VisitService } from './../../_service/visit.service';
import { Visit } from './../../_model/Visit';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { Video } from 'src/app/_model/Video';

@Component({
  selector: 'app-list-visit',
  templateUrl: './list-visit.component.html',
  styleUrls: ['./list-visit.component.css']
})
export class ListVisitComponent implements OnInit {

  visits: Visit[] = [];
  visit: Visit =  new Visit();
  visitNew: Visit = new Visit();
  visitUpdate: Visit = new Visit();
  videos: Video[] = [];
  visitDelete: Visit = new Visit();

  //modalRef: BsModalRef = new BsModalRef();


  constructor( private router: Router, private visitService : VisitService) { }


  ngOnInit(): void {
    this.loadReferences();
  }

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
    this.visitService.getVisit().subscribe(
      (value) => {
      this.visits = value;
      console.log(this.visits);
    });
}

/*
confirm(visit: Visit){
  this.visitDelete = visit;
}*/


onDelete(visit:Visit){
  //this.modalService.hide();
  this.visitService.deleteVisit(visit).subscribe(
     (value) => {
       this.visit = value;
       alert('Visite supprimée avec succés!!!');
       this.ngOnInit();
       console.log(this.visit);
     }
  );

}

/*
formUpdate(visit: Visit,template: TemplateRef<any>) {
  this.visitUpdate = visit;
  this.modalRef = this.modalService.show(template, this.config);
}

onUpdate(visit: Visit) {
  visit.setId(this.visitUpdate.id);
  this.visitService.updateVisit(visit).subscribe(
    () => {
      this.ngOnInit();
      alert('Visit modifiée avec succés!!!');
        //this.router.navigate(['/list']);
        console.log(this.visit);
    },
    (error) => {
      console.log(error);
    }
  );
}*/

}
