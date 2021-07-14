import { NgModule } from "@angular/core";
import { ToolbarModule } from "primeng/toolbar";
import { ToastModule } from "primeng/toast";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { SidebarModule } from "primeng/sidebar";
import { BadgeModule } from "primeng/badge";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { ButtonModule } from "primeng/button";
import { MultiSelectModule } from "primeng/multiselect";
import { FileUploadModule } from "primeng/fileupload";
import { HttpClientModule } from "@angular/common/http";
import { CarouselModule } from "primeng/carousel";
import { GalleriaModule } from "primeng/galleria";

@NgModule({
  exports: [
    ToolbarModule,
    ToastModule,
    TableModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    SidebarModule,
    BadgeModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    MultiSelectModule,
    FileUploadModule,
    HttpClientModule,
    CarouselModule,
    GalleriaModule,
  ],
})
export class PrimeNgModule {}
