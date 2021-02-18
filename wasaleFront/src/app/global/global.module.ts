import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { routes } from "./global.routes";
import { GlobalComponent } from "./global.component";
import { ToolbarComponent } from "../Grid/toolbar/toolbar.component";
import { SideNavComponent } from "../Grid/side-nav/side-nav.component";
import { SymbolNamePipe } from "../Grid/toolbar/symbol-name.pipe";
import { CasedNamePipe } from "../Grid/toolbar/cased-name.pipe";

@NgModule({
  declarations: [
    GlobalComponent,
    ToolbarComponent,
    SideNavComponent,
    SymbolNamePipe,
    CasedNamePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // RouterModule.forChild(routes),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class GlobalModule {}
