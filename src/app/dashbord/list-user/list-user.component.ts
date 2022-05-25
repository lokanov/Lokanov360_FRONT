import { AuthService } from 'src/app/_service/auth.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { User } from 'src/app/_model/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:      User[] = [];
  user:       User =  new User();
  userNew:    User = new User();
  userUpdate: User = new User();
  userDelete: User = new User();
  modalRef:    BsModalRef = new BsModalRef();

  constructor( private router: Router, private authService : AuthService,
    private modalService : BsModalService) { }

  ngOnInit(): void {
    this.loadReferences();
    }

  config = {
    backdrop: false,
    animate: true,
    ignoreBackdropClick: true,
    class: 'modal-lg',
  };
    configC = {
    backdrop: false,
    animate: true,
    ignoreBackdropClick: true,
    class: 'modal-sm',
  };

  loadReferences()
  {
    this.authService.getUser().subscribe(
      (value) => {
      this.users = value;
      console.log(this.users);
    });
  }


onDelete(user:User)
{
  //this.modalService.hide();
  this.authService.deleteUser(user).subscribe(
     (value) => {
       this.user = value;
       alert('User supprimée avec succés!!!');
       this.ngOnInit();
       console.log(this.user);
     }
  );
}

formUpdate(user: User,template: TemplateRef<any>) {
  this.userUpdate = user;
  this.modalRef = this.modalService.show(template, this.config);
}
onUpdate(user: User)
 {
  user.setId(this.userUpdate.id);
  this.authService.updateUser(user).subscribe(
    () => {
      this.ngOnInit();
      alert('User modifiée avec succés!!!');
        //this.router.navigate(['/list']);
        console.log(this.user);
    },
    (error) => {
      console.log(error);
    }
  );
}











/*
confirm(User: User){
  this.UserDelete = User;
}
decline(){
  this.modalService.hide();
}
templateConfirms(User:User,template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, this.configC);
  this.confirm(User);
}
*/


}
