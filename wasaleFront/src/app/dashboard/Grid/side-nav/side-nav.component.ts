import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "side-dash",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent implements OnInit {
  @Output() SidenavClose = new EventEmitter();
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

  links = [
    {
      disc: "الرئيسية",
      icon: "home",
      location: "/welcome",
    },
    {
      disc: "العروض",
      icon: "chrome_reader_mode",
      location: "/offers",
    },
    {
      disc: "خدمتنا",
      icon: "departure_board",
      location: "/ourService",
    },
    {
      disc: "الاتصال",
      icon: "phone",
      location: "/contacts",
    },
    {
      disc: "الاسعار",
      icon: "receipt_long",
      location: "/contacts/prices",
    },
    {
      disc: "الدعم الفني",
      icon: "headset_mic",
      location: "/soon",
    },
    {
      disc: "عنــــــا",
      icon: "sports_handball",
      location: "/welcome",
    },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onSidenavClose() {
    this.SidenavClose.emit();
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigateByUrl("/welcome");
    this.SidenavClose.emit();
  }
}
