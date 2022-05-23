import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../_model/Category';
import { Modality } from '../_model/Modality';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categorys: Category[] = [];

  constructor(private http: HttpClient)
   {

   }

   addCategory(category: Category):Observable<Category> {
    return this.http.post<Category>(environment.host+'/category/add', category);
   }

   getCategory():Observable<Category[]> {
    return this.http.get<Category[]>(environment.host+'/category/findAll');
   }

   updateCategory(category: Category):Observable<Category> {
    return this.http.put<Category>(environment.host+'/category/update/'+category.id,category);
  }

  deleteCategory(category: Category):Observable<Category>{
    return this.http.delete<Category>(environment.host+'/category/delete/'+category.id);
  }

  getCategoryByModality(modality: Modality): Observable<Category[]> {
    let params = new HttpParams()
    params =  params.append('name', modality.name);
    return this.http.get<Category[]>(environment.host+'/category/findByModality', {params: params});
}

}
