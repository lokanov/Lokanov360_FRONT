import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Video } from 'src/app/_model/Video';
import { VideoService } from 'src/app/_service/video.service';

@Component({
  selector: 'app-infos-abonnement-lokanov',
  templateUrl: './infos-abonnement-lokanov.component.html',
  styleUrls: ['./infos-abonnement-lokanov.component.css']
})
export class InfosAbonnementLokanovComponent implements OnInit {

  videos:      Video[] = [];
  video:       Video =  new Video();
  videoNew:    Video = new Video();
  videoUpdate: Video = new Video();
  videoDelete: Video = new Video();
  modalRef:    BsModalRef = new BsModalRef();

  constructor( private router: Router, private videoService : VideoService,
    private modalService : BsModalService) { }

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
    this.videoService.getVideo().subscribe(
      (value) => {
      this.videos = value;
      console.log(this.videos);
    });
  }


  confirm(video: Video){
    this.videoDelete = video;
  }
  decline(){
    this.modalService.hide();
  }

onDelete(video:Video)
{
  this.modalService.hide();
  this.videoService.deleteVideo(video).subscribe(
     (value) => {
       this.video = value;
       alert('Video supprimée avec succés!!!');
       this.ngOnInit();
       console.log(this.video);
     }
  );
}


templateConfirms(video:Video,template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, this.configC);
  this.confirm(video);
}
formUpdate(video: Video,template: TemplateRef<any>) {
  this.videoUpdate = video;
  this.modalRef = this.modalService.show(template, this.config);
}
onUpdate()
 {
  //video.setId(this.videoUpdate.id);
  this.videoService.updateVideo(this.videoUpdate).subscribe(
    () => {
      this.ngOnInit();
      alert('Video modifiée avec succés!!!');
        //this.router.navigate(['/list']);
        console.log(this.video);
    },
    (error) => {
      console.log(error);
    }
  );
}



}
