import { noUndefined } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Category } from '../_model/Category';
import { Modality } from '../_model/Modality';
import { ISearchFormCriteria } from '../_model/SearchFormCriteria';
import { User } from '../_model/User';


interface ISearchCriteria { searchData: ISearchFormCriteria };

@Injectable({
  providedIn: 'root'
})
export class FilterSearchService {
  
  public user:User = new User();
  public userName:any;
  userConnected:User=new User();
  public modality:Modality = new Modality();
  public category:Category = new Category();
  name : any;
  url: any;

  private initialValue: ISearchFormCriteria = {
    user: undefined,
    userName: undefined,
    userConnected: undefined,
    

  };
  formValue : any;

  private readonly _searchCriteria = new BehaviorSubject<ISearchCriteria>({ searchData: this.initialValue });
  readonly searchCriteria$ = this._searchCriteria.asObservable();
  get searchCriteria(): ISearchCriteria {
    return this._searchCriteria.getValue();
  }
  
  set searchCriteria(value: ISearchCriteria) {
    this._searchCriteria.next(value);
  }
  constructor() {
  }

  

setUser(value: any) : void{
  this.searchCriteria = {
    ...this.searchCriteria,
      searchData: {
        ...this.searchCriteria.searchData,
        user:value
      }
  };
}
setUserConected(value: any) : void{
  this.searchCriteria = {
    ...this.searchCriteria,
      searchData: {
        ...this.searchCriteria.searchData,
        userConnected:value
      }
  };
}

setUername(value:any):void{
  this.searchCriteria = {
    ...this.searchCriteria,
      searchData: {
        ...this.searchCriteria.searchData,
        userName:value
      }
  };
}

/*
  setFormControlValue(value: any) {
    
    this.formValue = value;
  }*/

  loadScriptt(url:string){
    const body =<HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
   }
   
}
