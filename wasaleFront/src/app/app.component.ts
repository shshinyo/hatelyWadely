import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang("en");
    const lang = localStorage.getItem("lang") || "en";
    this.translateService.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  // //preload Three-dots
  ngAfterViewInit(): void {
    this.hidePreloader();
  }

  private hidePreloader(): void {
    const el = document.getElementById("globalLoader");
    if (el) {
      el.addEventListener("transitionend", () => {
        setTimeout(() => {
          el.className = "global-loader-hidden";
        }, 200);
      });

      if (!el.className.includes("global-loader-hidden")) {
        el.className += " global-loader-fade-in";
      }
    }
  }
}
