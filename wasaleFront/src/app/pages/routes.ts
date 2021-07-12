import { Routes } from "@angular/router";
import { Dashboard404 } from "../Error404/dashboard.component";
import { AuthGuard } from "../Guards/auth-guard.guard";
import { ContactsComponent } from "./contacts/contacts.component";
import { OffersComponent } from "./offers/offers.component";
import { OurServiceComponent } from "./our-service/our-service.component";
import { SoonComponent } from "./soon/soon.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "/welcome",
        pathMatch: "full",
      },
      {
        path: "welcome",
        component: WelcomePageComponent,
      },
      {
        path: "offers",
        component: OffersComponent,
        // canActivate: [AuthGuard],
        // canDeactivate: ["canDeactivateRegister"],
      },
      {
        path: "soon",
        component: SoonComponent,
      },
      {
        path: "ourService",
        component: OurServiceComponent,
      },
      {
        path: "contacts",
        children: [
          {
            path: "",
            component: ContactsComponent,
          },
          {
            path: "prices",
            component: ContactsComponent,
          },
        ],
      },
    ],
  },
];
