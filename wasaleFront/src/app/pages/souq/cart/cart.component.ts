import { find } from "rxjs/Operators";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { SouqService } from "src/app/services/souq.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cart;
  constructor(private souqSer: SouqService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cart = this.souqSer.cart;
  }
}
