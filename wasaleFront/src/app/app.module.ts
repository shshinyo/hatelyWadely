import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { SharedModule } from "./shared/shared.module";
import { PagesModule } from "./pages/pages.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { UserModule } from "./user/user.module";
import { GlobalModule } from "./global/global.module";
import { Dashboard404 } from "./Error404/dashboard.component";

@NgModule({
  declarations: [AppComponent, Dashboard404],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PagesModule,
    DashboardModule,
    UserModule,
    GlobalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
