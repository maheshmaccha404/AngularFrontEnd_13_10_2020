import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import {ProductService} from '../shared/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',

  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]

})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.refreshproductList();
  }
  
  page = 1;
  pageSize = 5;
  page_size = ['1','2','3','4','5','6','7','8','9','10'];
  p: number = 1;
  collection: any[] ;  
  refreshproductList() {
    this.productService.getproductList().subscribe((res) => {

    this.collection = res as Product[]
      console.log(this.collection.length);
      for (let index = 0; index < this.collection.length; index++) {
        this.collection[index]['no'] = index + 1;  
      }
    });
  }
  
  onChange(event){
    this.pageSize = event
  }
}