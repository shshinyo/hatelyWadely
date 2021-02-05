import { Routes } from "@angular/router";
import { DefaultComponent } from "./default/default.component";
import { LayoutComponent } from "./layoutContainer.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: DefaultComponent,
      },
    ],
  },
];
