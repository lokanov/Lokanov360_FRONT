import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_model/User';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  user = new User();
  userCnnected = new User();
  constructor() { }

  ngOnInit(): void {
  }

}
