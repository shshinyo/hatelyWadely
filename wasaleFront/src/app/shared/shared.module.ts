import { ScrollingModule } from "@angular/cdk/scrolling";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ToastrModule } from "ngx-toastr";
import { AngularSvgIconModule } from "angular-svg-icon";

import { MaterialModule } from "./material.module";
import { HighchartsChartModule } from "highcharts-angular";
import { FooterComponent } from "../Grid/footer/footer.component";
import { CardComponent } from "./widget/card/card.component";
import { PieComponent } from "./widget/pie/pie.component";

const LOCAL_COMPONENTS = [];
const SHARED_COMPONENTS = [FooterComponent, CardComponent, PieComponent];

const LOCAL_DIRECTIVES = [];

const SHARED_DIRECTIVES = [];

const THIRD_MODULES = [
  MaterialModule,
  FlexLayoutModule,
  HighchartsChartModule,
  ToastrModule.forRoot({
    timeOut: 4000,
    positionClass: "toast-top-left",
    preventDuplicates: true,
  }),
  AngularSvgIconModule.forRoot(),
];

const COMMON_MODULES = [CommonModule, FormsModule, RouterModule, ReactiveFormsModule];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    ...LOCAL_COMPONENTS,
    ...LOCAL_DIRECTIVES,
    ...SHARED_DIRECTIVES,
  ],
  imports: [...COMMON_MODULES, ...THIRD_MODULES],
  exports: [
    ...SHARED_COMPONENTS,
    ...COMMON_MODULES,
    ...THIRD_MODULES,
    ...SHARED_DIRECTIVES,
  ],
})
export class SharedModule {}
