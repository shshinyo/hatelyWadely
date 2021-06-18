import { ProductInformationComponent } from './../product-information/product-information.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


import { ProductsDataComponent } from './products-data/products-data.component';
import { MainProductsComponent } from './main-products/main-products.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';



const routes : Routes = [
   { path: '', component: MainProductsComponent },
   { path: ':id', component: ProductsDataComponent },
   { path: ':id/:secondId', component: ProductInformationComponent}
  ]

@NgModule({
  declarations: [
    MainProductsComponent,
    ProductsDataComponent,
    ProductInformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers : []
})
export class SouqModule { }
