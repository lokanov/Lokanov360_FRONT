import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/_model/Category';
import { Visit } from 'src/app/_model/Visit';
import { CategoryService } from 'src/app/_service/category.service';
import { VisitService } from 'src/app/_service/visit.service';

@Component({
  selector: 'app-number-by-catgeory',
  templateUrl: './number-by-catgeory.component.html',
  styleUrls: ['./number-by-catgeory.component.css']
})
export class NumberByCatgeoryComponent implements OnInit {

  @Input() visits: Visit[] = [];
  @Input() categorys: Category[] = [];
  visit: Visit =  new Visit();

  constructor(private visitService: VisitService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.loadReferences()
   
  }
mL =0
total2 = 0;
total3 = 0;
total4 = 0;
total5 = 0;
totals = 0

 counts = {}; 
  loadReferences()
  {
  this.categoryService.getCategory().subscribe(
    (value) =>
    {
      this.categorys = value;   
    }
    
  )


  this.visitService.getVisit().subscribe(
    (value) =>
    {
      this.visits = value;
      this.totals = this.visits.length;

      
    this.total2 = this.visits.filter( x => x.category.id == 2).length
    this.total3 = this.visits.filter( x => x.category.id == 3).length
    this.total4 = this.visits.filter( x => x.category.id == 4).length
    this.total5 = this.visits.filter( x => x.category.id == 5).length
     
    }
    
  )
  
  
/*
    this.visitService.getNumberVisitByCategory().subscribe(
      (value) => {
      this.visits = value;
    
      console.log(this.visits);
      this.total = value.length;
      this.totals = this.total + 1
      if(this.visit.category.id == 2)
      {
        this.total = value.length;
      }
    });*/
   
  }
  
  
}
