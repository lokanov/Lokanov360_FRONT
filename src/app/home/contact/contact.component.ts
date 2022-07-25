import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/_model/Contact';
import { ContactService } from 'src/app/_service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    form:FormGroup;
    constructor(private fb: FormBuilder,private contactService:ContactService) {
  
      this.form = this.fb.group({
        nameAndSurname: [null, Validators.required],
        email: [null, Validators.required],
        phone: [null, Validators.required],
        object: [null, Validators.required],
        message: [null, Validators.required],
      })
     }
  
  //configuration mail
  
    ngOnInit(): void {
      this.loadReference();
    }
  
 
     mimeMessage(){
       this.contactService.saveMessage(this.form.value).subscribe(
          (contact: Contact) => {
            console.log(contact)
          },
           error => {
             console.log(error)
           }
       );
       this.form.reset();
     }
  
     loadReference(){
       this.contactService.lireMessage().subscribe(
          (value: any) => {
            console.log(value)
          },
           error => {
             console.log(error)
           }
       );
     }
    
  
}
