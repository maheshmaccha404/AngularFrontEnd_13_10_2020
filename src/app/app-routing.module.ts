import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path:"category", component:CategoryComponent}, 
  {path:"product", component:ProductComponent} ,
  {path:"product_list",component:ProductListComponent},
  {path:"list",component:ListComponent},

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule] 
})
export class AppRoutingModule { } export const 
RoutingComponent = [CategoryComponent,ProductComponent,ProductListComponent,ListComponent];
