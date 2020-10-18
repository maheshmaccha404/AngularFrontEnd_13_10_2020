import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { category } from './category';

@Injectable()
export class CategoryService {
  selectedCategory: category;
  category: category[];
  readonly baseURL = 'http://localhost:3000/category';

  constructor(private http: HttpClient) { }

  postcategory(category: category) {
    return this.http.post(this.baseURL, category);
  }

  getcategoryList() {
    return this.http.get(this.baseURL);
  }

  putcategory(category: category) {
    return this.http.put(this.baseURL + `/${category._id}`, category);
  }

  deletecategory(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
