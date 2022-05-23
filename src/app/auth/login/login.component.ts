import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_model/User';
import { FilterSearchService } from 'src/app/_service/filterSearch.service';
import { LoginService } from 'src/app/_service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = new User();
  formlogin: FormGroup;
  userConnected: User = new User();

  constructor(private router: Router, private fb: FormBuilder,
   private loginService: LoginService,private filterSearchService: FilterSearchService) {

      this.formlogin = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  loginUser()
  {
      this.loginService.loginUserFromRemote(this.formlogin.value).subscribe(

     value => {
      alert('Utilisateur connecté avec succés!!!!!');
      this.user = value;
      console.log(value);
      this.filterSearchService.setUser(this.user);
      this.filterSearchService.setUername(value.username);
      this.loginService.setSession(this.user)
        switch (value.authorities[0].authority){
          case "ROLE_USER":
            this.router.navigate(['/dashbord']);
             break;
          case "ROLE_ADMIN":
            this.router.navigate(['/dashbord-lokanov']);
            break;
            default:
              this.router.navigate(['/home']);
        }
       
     },
 error => {
   console.log("error");
   alert('email ou mot de passe incorrect!!!!!');
 }

    )

  }
}
