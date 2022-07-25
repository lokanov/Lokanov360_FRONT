import { Component, OnInit } from '@angular/core';
import { Visit } from '../_model/Visit';
import { VisitService } from '../_service/visit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  visits: Visit[] = [];
  visit: Visit =  new Visit();

  constructor(private visitService : VisitService) { }

  ngOnInit() {   
  
  }

 
}
