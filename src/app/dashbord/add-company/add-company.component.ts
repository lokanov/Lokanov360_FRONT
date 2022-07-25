import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Abonnement } from 'src/app/_model/Abonnement';
import { Company } from 'src/app/_model/Company';
import { AbonnementService } from 'src/app/_service/abonnement.service';
import { CompanyService } from 'src/app/_service/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  company : Company = new Company ();
  abonnement = new Abonnement();
  abonnements: Abonnement[] = [];
  formV: FormGroup;


  constructor(private fb: FormBuilder,  private abonnementService: AbonnementService, private companyService : CompanyService, private router: Router) {
    this.formV = this.fb.group({
      name: [null, Validators.required],
      address: [null, Validators.required],
      email : [null, Validators.required],
      phone: [null, Validators.required],
      personContact: [null, Validators.required],
      numberVisitAutorised: [null, Validators.required],
      abonnement: [null, Validators.required],
     
    });
  }

  ngOnInit(): void {
    this.loadReferences();
  }

  loadReferences()
  {
    //pour charger le select de la liste des category
    this.abonnementService.getAbonnement().subscribe(
      (value) => {
      this.abonnements = value;
    });
}

  onCreateCompany(company : Company)
  {
   this.companyService.addCompany(company).subscribe(
    (value) => {
      this.company = value;
      alert('Entreprise ajoutée avec succés!!!');
      console.log(this.company);
    },
    (_error) => {
      console.log('error');
    }
  );
  }


}
