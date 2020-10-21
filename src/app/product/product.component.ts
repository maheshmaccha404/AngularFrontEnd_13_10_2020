import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {ProductService} from '../shared/product.service';
import {CategoryService} from '../shared/category.service';
import { Product } from '../shared/product';

import { category } from '../shared/category';

declare var M: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  
  
  ngOnInit() {
    this.resetForm();
    this.refreshproductList();
  }
  
  resetForm(form?: NgForm) {
    if (form)
    form.reset();
    this.productService.selectedProduct = {
      _id: "",
      product_name: "",
      quantity: null,
      category : null,
      price: null,
      name : ""
    }
  }
  category_list = [];
  refreshproductList() {
    this.productService.getproductList().subscribe((res) => {
      this.productService.product = res as Product[];
    });
    this.productService.getcategoryList().subscribe((res) => {
      this.category_list = res as category[];
    });
  }

  refreshPage() {
    window.location.reload();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (form.value._id == "") {
      this.productService.postproduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshproductList();
        this.refreshPage();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.productService.putproduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshproductList();
        this.refreshPage();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  onEdit(p : Product) {    
    this.productService.selectedProduct = p;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.productService.deleteproduct(_id).subscribe((res) => {
        this.refreshproductList();
        this.resetForm(form);
        this.refreshPage();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
