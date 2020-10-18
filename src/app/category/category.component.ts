import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CategoryService } from '../shared/category.service';
import { category } from '../shared/category';

declare var M: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService] 
})
export class CategoryComponent implements OnInit {
  
  constructor(private categoryService: CategoryService) { }
  // constructor(public categoryService: CategoryService) { }
  
  
  ngOnInit() {
    this.resetForm();
    this.refreshcategoryList();
  }
 
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.categoryService.selectedCategory = {
      _id: "",
      name: "",
      description:"",
    }
  }
  
  refreshcategoryList() {
    this.categoryService.getcategoryList().subscribe((res) => {
      this.categoryService.category = res as category[];
    });
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.categoryService.postcategory(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshcategoryList();
        this.refreshPage();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.categoryService.putcategory(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshcategoryList();
        this.refreshPage();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  onEdit(emp: category) {
    this.categoryService.selectedCategory = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.categoryService.deletecategory(_id).subscribe((res) => {
        this.refreshcategoryList();
        this.resetForm(form);
        this.refreshPage();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
 
  refreshPage() {
    window.location.reload();
  }
}