import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { routes } from "./user.routes";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
    }),
  ],
})
export class UserModule {}
