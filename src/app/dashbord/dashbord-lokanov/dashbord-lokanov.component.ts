import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_model/User';
import { FilterSearchService } from 'src/app/_service/filterSearch.service';
import { LoginService } from 'src/app/_service/login.service';


@Component({
  selector: 'app-dashbord-lokanov',
  templateUrl: './dashbord-lokanov.component.html',
  styleUrls: ['./dashbord-lokanov.component.css']
})
export class DashbordLokanovComponent implements OnInit {

  isActive: string = 'active';
  current : string = 'tab-1';
  user : User = new User();
  userConnected: User = new User();


  constructor(private filterSearchService: FilterSearchService, private router: Router, private loginService : LoginService) { }

  ngOnInit(): void {
    if(this.filterSearchService.searchCriteria.searchData.user)
    {
      this.user = this.filterSearchService.searchCriteria.searchData.user;
      this.userConnected = this.filterSearchService.searchCriteria.searchData.userConnected

     }
      console.log(this.user)
  }


  

  activateClass(idTab: string) {
    this.current = idTab;
  }

  logOut() {
    this.loginService.logout()
   
    this.router.navigate(['/home'])
  
   // this.ngOnInit();
  }

}
