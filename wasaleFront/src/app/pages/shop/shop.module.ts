import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShopRoutingModule } from "./shop-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CategoryComponent } from "./category/category.component";

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent, CategoryComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModule],
})
export class ShopModule {}
