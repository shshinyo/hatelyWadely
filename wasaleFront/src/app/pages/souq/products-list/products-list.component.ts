import { Component, HostBinding, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { SouqService } from "../../../shared/services/souq.service";
import { QueryParams } from "src/app/shared/utilities/query-params";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  //  hide and show on hover (filter & carouser)
  displayCarousel = true;
  search: string | null = null;
  carouselOffers = [
    { imgUrl: "../../assets/images/images/dd1.jpg" },
    { imgUrl: "../../assets/images/images/dd2.jpg" },
    { imgUrl: "../../assets/images/images/dd3.jpg" },
    { imgUrl: "../../assets/images/images/dd4.jpg" },
  ];
  responsiveOptions: any[] = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  products: any;
  filteredProducts: any;
  displayDiv = false;
  diplayImg = true;
  selectedcategory;
  constructor(
    private _router: Router,
    private souqSer: SouqService,
    private route: ActivatedRoute
  ) {}
  // start cards
  cards: any;
  secondCards: any;
  footerArray: any;

  // end cards

  ngOnInit(): void {
    this.souqSer.getAllCategories().subscribe((res: any) => {
      this.products = res.categories;
      console.log("yey", this.products);
      this.filteredProducts = res.categories;
    });
    this.souqSer.getAllCategories().subscribe((res: any) => {
      this.cards = res.cards;
      console.log(">>", this.cards);
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

  onSearch(value: string): void {
    this._router.navigate([], {
      queryParams: {
        [QueryParams.Index]: null,
        [QueryParams.Search]: value || null,
      },
      queryParamsHandling: "merge",
    });
  }

  hover(product) {
    this.filteredProducts = this.products.find(
      (elem) => elem.name == product.name
    ).myProducts;
    this.displayCarousel = false;

    this.displayDiv = true;
    this.diplayImg = false;
    this.selectedcategory = product.id;
    console.log(this.selectedcategory);
    this.souqSer.selectedCategoryBehaviour.next(this.selectedcategory);
  }
  showPic() {
    this.displayCarousel = !this.displayCarousel;
    this.diplayImg = true;
    this.displayDiv = false;
  }
}
