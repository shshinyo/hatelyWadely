import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CategoriesListComponent } from './categories-list/categories-list.component';
import { DetailsComponent } from './details/details.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { StarComponent } from './star/star.component';
import { CardDataComponent } from './card-data/card-data.component';
import { SouqRoutingModule } from './souq-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { PrimeNgModule } from 'src/app/shared/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductsListComponent,
    CategoriesListComponent,
    DetailsComponent,
    CardInfoComponent,
    StarComponent,
    CardDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SouqRoutingModule,
    PrimeNgModule
  ],
  providers : []
})
export class SouqModule { }
