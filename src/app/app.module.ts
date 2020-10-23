import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';


import { AppRoutingModule , RoutingComponent } from './app-routing.module'; 
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';


import {NgxPaginationModule} from 'ngx-pagination';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,

    ProductComponent,
    RoutingComponent,
    ProductListComponent,
    ListComponent,
    // JwPaginationComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,       NgxPaginationModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
