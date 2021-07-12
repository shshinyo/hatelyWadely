import { SouqService } from "../../../services/souq.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { debounceTime } from "rxjs/Operators";

@Component({
  selector: "app-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrls: ["./categories-list.component.scss"],
})
export class CategoriesListComponent implements OnInit {
  constructor(private souqSer: SouqService, private route: ActivatedRoute) {}
  div1 = false;
  div2 = false;
  div3 = false;
  div4 = false;
  id;
  cards: any;
  images: any;

  myPics = [
    { img1: "assets/s1.jpg" },
    { img1: "assets/s2.jpg" },
    { img1: "assets/s3.jpg" },
    { img1: "assets/s4.jpg" },
  ];

  myPics2 = [
    { img1: "assets/men.jpg" },
    { img1: "assets/men2.jpg" },
    { img1: "assets/men3.jpg" },
  ];
  myPics3 = [
    { img1: "assets/h1.jpg" },
    { img1: "assets/h2.jpg" },
    { img1: "assets/h3.jpg" },
  ];
  myPic4 = [{ img1: "assets/c1.jpg" }];

  ngOnInit(): void {
    this.id = this.route.snapshot.params["category"];
    if (this.id == "groceries") {
      this.souqSer.getAllCategories().subscribe((res) => {
        this.cards = res.firstCard;
        this.images = this.myPics;
        this.div1 = true;
      });
    } else if (this.id == "fashion") {
      this.souqSer.getAllCategories().subscribe((res) => {
        this.cards = res.secondCard;
        this.images = this.myPics2;
        this.div2 = true;
      });
    } else if (this.id == "beauty") {
      this.souqSer.getAllCategories().subscribe((res) => {
        this.cards = res.thirdCard;
        this.images = this.myPics3;
        this.div3 = true;
      });
    } else if (this.id == "chlidrenCare") {
      this.souqSer.getAllCategories().subscribe((res) => {
        this.cards = res.fourthCard;
        this.images = this.myPic4;
        this.div4 = true;
      });
    }

    this.souqSer
      .getAllCategories()
      .pipe(debounceTime(100))
      .subscribe((x) => console.log(x));
    console.log("sdahdkj");
  }
}
