import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_model/User';
import { Role } from 'src/app/_model/Role';
import { UserService } from 'src/app/_service/user.service';
import { RoleService } from 'src/app/_service/role.service';
import { RoleName } from 'src/app/_model/RoleName.enum';
import { Company } from 'src/app/_model/Company';
import { CompanyService } from 'src/app/_service/company.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  role = new Role();
  company = new Company();
  users: User[] = [];
  form: FormGroup;
  roles: Role[] = [];
  companys: Company[] = [];
  roleName : RoleName | undefined;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private roleService : RoleService, private companyService: CompanyService) {
    this.form = this.fb.group({
      firstName: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      role: [null, Validators.required],
      company: [null, Validators.required],

    });
  }

  ngOnInit(): void {
    this.loadReferences();
  }

  loadReferences()
  {
    //pour charger le select de la liste des roles
    this.roleService.getRole().subscribe(
      (value) => {
      this.roles = value;
      console.log(this.roles);
    });
 
    this.companyService.getCompany().subscribe(
    (value) => {
     this.companys = value;
     console.log(this.companys);
      }
    );

}


  registerUser()
  {
    this.userService.registerUserFromRemote(this.user).subscribe(
      res => {
        this.user = res;
        alert('Votre compte a été créee avec succés!!!');
        this.userService.setSession(this.user)
        this.router.navigate (['/login']);
        console.log(this.user);
      },
      (_error) => {
        console.log('error');
      }
    );
  }

}
