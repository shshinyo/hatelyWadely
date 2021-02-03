import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { ToolbarComponent } from "./Grid/toolbar/toolbar.component";
import { SideNavComponent } from "./Grid/side-nav/side-nav.component";
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from "./pages/pages.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { UserModule } from "./user/user.module";

@NgModule({
  declarations: [AppComponent, ToolbarComponent, SideNavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PagesModule,
    DashboardModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
