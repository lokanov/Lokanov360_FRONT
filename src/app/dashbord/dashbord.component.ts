import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_model/User';
import { FilterSearchService } from 'src/app/_service/filterSearch.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {


  isActive: string = 'active';
  current : string = 'tab-1';
  user : User = new User();
  userConnected: User = new User();


  constructor(private filterSearchService: FilterSearchService, private router: Router) { }

  ngOnInit(): void {
   if(this.filterSearchService.searchCriteria.searchData.user){
    this.user = this.filterSearchService.searchCriteria.searchData.user;
    this.userConnected = this.filterSearchService.searchCriteria.searchData.userConnected
   }

    console.log(this.user)
  }
  activateClass(idTab: string) {
    this.current = idTab;
  }

}
