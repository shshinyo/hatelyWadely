import { ThrowStmt } from "@angular/compiler";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { Router } from "@angular/router";
import { retry } from "rxjs/Operators";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();
  links = [
    {
      location: "/welcome",
      outletName: "null",
      name: "الرئيـــــسية",
      icon: "home",
      disabled: false,
    },
    {
      location: "/offers",
      outletName: "null",
      name: "العروض",
      icon: "chrome_reader_mode",
      disabled: false,
    },
    {
      location: "/contacts",
      outletName: "null",
      name: "الاتصال",
      icon: "phone",
      disabled: false,
    },
    {
      location: "/staff",
      outletName: "null",
      name: "عنــــــا",
      icon: "sports_handball",
      disabled: true,
    },
  ];
  activeLink = this.links[0];
  background: ThemePalette = "warn";
  // user is logged in
  get loggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  // get user name for avatar
  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.name;
    }
    return "";
  }
  // account_circle
  constructor(private authService: AuthService, private router:Router) {
    console.log(this.loggedIn);
  }

  ngOnInit(): void {}

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigateByUrl('/welcome');
  }
}