import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/_model/Category';
import { Lieu } from 'src/app/_model/Lieu';
import { Modality } from 'src/app/_model/Modality';
import { User } from 'src/app/_model/User';
import { Video } from 'src/app/_model/Video';
import { Visit } from 'src/app/_model/Visit';
import { CategoryService } from 'src/app/_service/category.service';
import { LieuService } from 'src/app/_service/lieu.service';
import { ModalityService } from 'src/app/_service/modality.service';
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
  lieus: Lieu[] = [];
  categories: Category[] = [];
  modalitys: Modality[] = [];
  visitDelete: Visit = new Visit();

  modalRef: BsModalRef = new BsModalRef();


  constructor( private router: Router, private modalService : BsModalService,  private visitService : VisitService,private videoService:  VideoService, private lieuService : LieuService,
     private categoryService : CategoryService, private modalityService : ModalityService) { }

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
    this.videoService.getVideo().subscribe(
      (value) => {
      this.videos = value;
      console.log(this.videos);
    });

    this.lieuService.getLieu().subscribe(
      (value) => {
      this.lieus = value;
    });
      

    this.modalityService.getModality().subscribe(
      (value) =>
      { 
        this.modalitys = value;
      }
        );
    //pour charger le select de la liste des category
    this.categoryService.getCategory().subscribe(
      (value) => {
      this.categories = value;
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


formUpdate(visit: Visit,template: TemplateRef<any>) {
  this.visitUpdate = visit;
  this.modalRef = this.modalService.show(template, this.config);
}

onUpdate() {
 // visit.setId(this.visitUpdate.id);
  this.visitService.updateVisit(this.visitUpdate).subscribe(
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
}

}

 