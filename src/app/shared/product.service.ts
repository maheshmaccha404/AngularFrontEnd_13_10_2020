import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductService {
  selectedProduct: Product;
  product: Product[];
  readonly baseURL = 'http://localhost:3000/product';

  constructor(private http: HttpClient) { }

  postproduct(product: Product) {
    return this.http.post(this.baseURL, product);
  }

  getproductList() {
    return this.http.get(this.baseURL);
  }
  
  getcategoryList() {
    return this.http.get(this.baseURL+`/1`);
  }

  putproduct(product: Product) {
    return this.http.put(this.baseURL + `/${product._id}`, product);
  }

  deleteproduct(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
