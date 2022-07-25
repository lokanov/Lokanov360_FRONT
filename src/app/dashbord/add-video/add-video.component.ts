import { VideoService } from './../../_service/video.service';
import { Video } from './../../_model/Video';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Server } from 'http';


@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  video = new Video();
  form: FormGroup;

  constructor(private fb: FormBuilder, private videoService: VideoService,
     private router: Router, private http: HttpClient ) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      url: [null, Validators.required],
      nombrePieces: [null, Validators.required],
      nombreEtages: [null, Validators.required],
      surface: [null, Validators.required],
      dateCreated: [null, Validators.required],
      priceTaxed: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }
text : any;
  onCreate()
  {
    this.videoService.addVideo(this.form.value).subscribe(
      (value) => {
        this.video = value;
       
       this.text = "Video ajoutée dans votyre compte";
     // window.location.hostname ="mailto:leyeamy82@gmail.com?subject='video'+body='video ajoute avec succes'"
       
        console.log(this.video);
      },
      (_error) => {
        console.log('error');
      }
    );
    alert('Video ajoutée avec succés!!!');
    window.location.reload()
  }


}
