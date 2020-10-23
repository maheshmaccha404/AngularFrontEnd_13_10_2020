import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import {ProductService} from '../shared/product.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[ProductService]
})

export class ListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.start();
  }
 
  limit = 5;
  limit_size = ['1','2','3','4','5','6','7','8','9','10'];
  pages_total = 10;
  page: number = 1;
  default_value=5;
  
  onclick(number){
    if (number != this.pages_total+1 && number !== 0) {
      this.onSubmit(number,this.limit);      
    }
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  onChange(event){
    this.limit = event;
    this.onSubmit(this.page,this.limit);
  }
    
  start(){
    this.onSubmit(this.page ,this.limit);    
  }
  
  onSubmit(page : number ,limit : number){
    console.log('page:'+page,'limit:'+limit)
    this.productService.getlist(page,limit).subscribe((res)=>{
      this.productService.product = res['docs'] as Product[];
      this.pages_total = res['pages'];
      this.page = page;
    });
  }

}