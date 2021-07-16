import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardDataComponent } from "../souq/card-data/card-data.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent
  },
  // need to change and edit
  { path: ':item/:id', component: CardDataComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
