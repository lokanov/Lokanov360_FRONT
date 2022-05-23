import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/_model/User';
import { Video } from 'src/app/_model/Video';
import { Visit } from 'src/app/_model/Visit';
import { VideoService } from 'src/app/_service/video.service';
import { VisitService } from 'src/app/_service/visit.service';

@Component({
  selector: 'app-dashbord-home',
  templateUrl: './dashbord-home.component.html',
  styleUrls: ['./dashbord-home.component.css']
})
export class DashbordHomeComponent implements OnInit {

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

 