import { VisitService } from './../../_service/visit.service';
import { Visit } from './../../_model/Visit';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { Video } from 'src/app/_model/Video';
import { Category } from 'src/app/_model/Category';
import { VideoService } from 'src/app/_service/video.service';
import { LieuService } from 'src/app/_service/lieu.service';
import { CategoryService } from 'src/app/_service/category.service';
import { ModalityService } from 'src/app/_service/modality.service';
import { Lieu } from 'src/app/_model/Lieu';
import { Modality } from 'src/app/_model/Modality';

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
  lieus : Lieu[] =[];
  categories: Category[] = [];
  modalitys: Modality[] = [];
  visitDelete: Visit = new Visit();

  modalRef: BsModalRef = new BsModalRef();


  constructor( private router: Router, private visitService : VisitService, private modalService : BsModalService, 
    private videoService:  VideoService, private lieuService : LieuService, private categoryService : CategoryService, private modalityService : ModalityService) { }


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


templateConfirms(visit: Visit,template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, this.configC);
  this.confirm(visit);
}
confirm(visit: Visit){
  this.visitDelete = visit;
}
decline(){
  this.modalService.hide();
}


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
  //visit.setId(this.visitUpdate.id);
  this.visitService.updateVisit(this.visitUpdate).subscribe(
    () => {
      this.ngOnInit();
      alert('Visite modifiée avec succés!!!');
        //this.router.navigate(['/list']);
        console.log(this.visit);
    },
    (error) => {
      console.log(error);
    }
  );
}

}
