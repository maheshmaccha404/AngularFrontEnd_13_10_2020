import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';


import { AppRoutingModule , RoutingComponent } from './app-routing.module'; 
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,

    ProductComponent,
    RoutingComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
