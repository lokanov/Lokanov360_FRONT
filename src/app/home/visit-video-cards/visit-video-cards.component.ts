import { Component, Input, OnInit } from '@angular/core';
import { Visit } from 'src/app/_model/Visit';

@Component({
  selector: 'app-visit-video-cards',
  templateUrl: './visit-video-cards.component.html',
  styleUrls: ['./visit-video-cards.component.css']
})
export class VisitVideoCardsComponent implements OnInit {

  @Input()
  visits: Visit[] = [];
  visit: Visit =  new Visit();
  constructor() { }

  ngOnInit(): void {
  }

}
