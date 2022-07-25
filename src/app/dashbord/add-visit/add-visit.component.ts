import { VisitService } from '../../_service/visit.service';
import { Visit } from '../../_model/Visit';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Video } from 'src/app/_model/Video';
import { VideoService } from 'src/app/_service/video.service';
import { Lieu } from 'src/app/_model/Lieu';
import { Category } from 'src/app/_model/Category';
import { Modality } from 'src/app/_model/Modality';
import { LieuService } from 'src/app/_service/lieu.service';
import { ModalityService } from 'src/app/_service/modality.service';
import { CategoryService } from 'src/app/_service/category.service';
import { FilterSearchService } from 'src/app/_service/filterSearch.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css']
})
export class AddVisitComponent implements OnInit {

  visit = new Visit();
  video = new Video();
  lieu = new Lieu();
  category = new Category();
  modality =  new Modality();

  videos: Video[] = [];
  lieus: Lieu[] = [];
  categorys: Category[] = [];
  modalitys: Modality[] = [];
  formV: FormGroup;
   



  constructor(private fb: FormBuilder, private visitService: VisitService, private lieuService: LieuService, public filterSearchService: FilterSearchService,
     private modalityService: ModalityService, private videoService: VideoService, private categoryService: CategoryService, private router: Router) {
    this.formV = this.fb.group({
      numberReference: [null, Validators.required],
      titre: [null, Validators.required],
      address: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      video: [null, Validators.required],
      lieu: [null, Validators.required],
      category: [null, Validators.required],
      modality: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadReferences();
  }


  onSelect( e: any)
  {
  
    this.modalityService.getModality().subscribe(
      (value) =>
      {
        this.modalitys = value;
        console.log(this.modalitys);
        
      }
        );
  
  this.modalitys = [];

  }
      
    
  

  loadReferences()
  {
    //pour charger le select de la liste des videos
    this.videoService.getVideo().subscribe(
      (value) => {
      this.videos = value;
      console.log(this.videos);
    });

    //pour charger le select de la liste des lieux
    this.lieuService.getLieu().subscribe(
      (value) => {
      this.lieus = value;
    });

    //pour charger le select de la liste des category
    this.categoryService.getCategory().subscribe(
      (value) => {
      this.categorys = value;
    });
}
/*
onSelect(cat: any)
{
  let name = cat.target.value;
this.modalityService.getByCategory(name).subscribe(
  (value) =>
  { 
    this.modalitys = value;
    console.log(this.modalitys);
  }
    );
}
*/


  onCreateVisite(visit: Visit)
  {
    this.visitService.addVisit(visit).subscribe(
      (value) => {
        this.visit = value;
        alert('Visite ajoutée avec succés!!!');
        console.log(this.visit);
      },
      (_error) => {
        console.log('error');
      }
    );
   
  
  }
 
}
