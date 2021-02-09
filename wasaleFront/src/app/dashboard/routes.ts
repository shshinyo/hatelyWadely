import { Routes } from "@angular/router";
import { Dashboard404 } from "../Error404/dashboard.component";
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
      {
        path: "notfound",
        component: Dashboard404,
      },
      {
        path: "**",
        redirectTo: "notfound",
      },
    ],
  },
];
