import { ActivatedRoute } from "@angular/router";
import { SouqService } from "../../../shared/services/souq.service";
import { Component, OnInit } from "@angular/core";
import { debounceTime } from "rxjs/Operators";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  products: any;
  filteredProducts: any;
  displayDiv = false;
  diplayImg = true;
  selectedcategory;
  constructor(private souqSer: SouqService, private route: ActivatedRoute) {}
  // start cards
  cards: any;
  secondCards: any;
  footerArray: any;
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  // end cards

  ngOnInit(): void {
    this.souqSer.getAllCategories().subscribe((res: any) => {
      this.products = res.categories;
      console.log("yey", this.products);
      this.filteredProducts = res.categories;
    });
    this.souqSer.getAllCategories().subscribe((res: any) => {
      this.cards = res.cards;
      console.log(this.cards);
      this.slides = this.chunk(this.cards, 3);
    });
    this.souqSer.getAllCategories().subscribe((res: any) => {
      this.secondCards = res.secondCards;
      console.log(this.cards);
    });
    this.souqSer.getAllCategories().subscribe((res: any) => {
      this.footerArray = res.myFooter;
      console.log("ha", this.cards);
    });
  }
  hover(product) {
    this.filteredProducts = this.products.find(
      (elem) => elem.name == product.name
    ).myProducts;
    this.displayDiv = true;
    this.diplayImg = false;
    this.selectedcategory = product.id;
    console.log(this.selectedcategory);
    this.souqSer.selectedCategoryBehaviour.next(this.selectedcategory);
  }
  showPic() {
    this.diplayImg = true;
    this.displayDiv = false;
  }
}
