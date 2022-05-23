import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_model/User';

@Component({
  selector: 'app-dashbord-home',
  templateUrl: './dashbord-home.component.html',
  styleUrls: ['./dashbord-home.component.css']
})
export class DashbordHomeComponent implements OnInit {


  user = new User();
  userConnected = new  User();

  constructor() { }

  ngOnInit() {
  }


}
