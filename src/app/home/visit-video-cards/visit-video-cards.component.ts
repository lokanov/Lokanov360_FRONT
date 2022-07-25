import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/_model/Video';
import { Visit } from 'src/app/_model/Visit';
import { VideoService } from 'src/app/_service/video.service';
import { VisitService } from 'src/app/_service/visit.service';
import { VisitVideoComponent } from '../visit-video/visit-video.component';

@Component({
  selector: 'app-visit-video-cards',
  templateUrl: './visit-video-cards.component.html',
  styleUrls: ['./visit-video-cards.component.css']
})
export class VisitVideoCardsComponent implements OnInit {
  

  @Input() visits: Visit[] = [];
  visit: Visit =  new Visit();
 @Input()
  public videos: Video[] = [];
  video: Video =  new Video();
  rating = 0;
 rating3 : any;

 
  constructor(private videoService: VideoService, private visitService: VisitService, public _sanitizer: DomSanitizer) {
  
  }
 
  
 
  ngOnInit(): void 
  {
    this.loadReferences()
  }

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
   
  }

 onPlay()
  {
 
  }

}
