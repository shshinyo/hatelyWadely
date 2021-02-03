import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent implements OnInit {
  @Output() SidenavClose = new EventEmitter();
  panelOpenState = false;

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

  constructor() {}

  ngOnInit(): void {}

  onSidenavClose() {
    this.SidenavClose.emit();
  }
}
