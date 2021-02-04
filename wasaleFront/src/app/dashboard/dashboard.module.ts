import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { DefaultComponent } from "./layoutContainer.component";
import { SideNavComponent } from "./Grid/side-nav/side-nav.component";
import { ToolbarComponent } from "./Grid/toolbar/toolbar.component";

@NgModule({
  declarations: [DefaultComponent, SideNavComponent, ToolbarComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
