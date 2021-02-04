import { Routes } from "@angular/router";
import { DefaultComponent } from "./layoutContainer.component";

export const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [],
  },
];
