import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { routes } from "./routes";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { ToastrModule } from "ngx-toastr";
import { OffersComponent } from "./offers/offers.component";
import { SoonComponent } from "./soon/soon.component";
import { OurServiceComponent } from "./our-service/our-service.component";
import { ContactsComponent } from "./contacts/contacts.component";

@NgModule({
  declarations: [
    WelcomePageComponent,
    OffersComponent,
    SoonComponent,
    OurServiceComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    DragDropModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: "canDeactivateRegister",
      useValue: checkDirtyState,
    },
  ],
})
export class PagesModule {}

export function checkDirtyState(component: OffersComponent) {
  if (component.isDirty) {
    return window.confirm("هل انت متأكد من عدم التسجيــل ؟؟");
  }
  return true;
}
