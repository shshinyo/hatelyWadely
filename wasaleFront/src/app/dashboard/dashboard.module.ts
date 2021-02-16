import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { SharedModule } from "../shared/shared.module";
// import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
// import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { LayoutComponent } from "./layoutContainer.component";
import { DefaultComponent } from "./default/default.component";
import { SideNavComponent } from "./Grid/side-nav/side-nav.component";
import { ToolbarComponent } from "./Grid/toolbar/toolbar.component";
import { HttpClient } from "@angular/common/http";

// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, "../shared/i18n/", ".json");
// }

@NgModule({
  declarations: [LayoutComponent, DefaultComponent, SideNavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    // TranslateModule.forChild({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient],
    //   },
    //   isolate: true,
    // }),
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}
