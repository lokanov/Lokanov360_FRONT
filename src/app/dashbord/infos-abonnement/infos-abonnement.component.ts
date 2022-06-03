import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/_model/Video';
import { VideoService } from 'src/app/_service/video.service';

@Component({
  selector: 'app-infos-abonnement',
  templateUrl: './infos-abonnement.component.html',
  styleUrls: ['./infos-abonnement.component.css']
})
export class InfosAbonnementComponent implements OnInit {
  videos:      Video[] = [];
  video:       Video =  new Video();
  constructor(private videoService : VideoService) { }

  ngOnInit(): void {
    this.loadReferences();
  }

  loadReferences()
  {
    this.videoService.getVideo().subscribe(
      (value) => {
      this.videos = value;
      console.log(this.videos);
    });
  }

}
