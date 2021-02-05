import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { SharedModule } from "../shared/shared.module";

import { LayoutComponent } from "./layoutContainer.component";
import { DefaultComponent } from "./default/default.component";
import { SideNavComponent } from "./Grid/side-nav/side-nav.component";
import { ToolbarComponent } from "./Grid/toolbar/toolbar.component";

@NgModule({
  declarations: [LayoutComponent, DefaultComponent, SideNavComponent, ToolbarComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
