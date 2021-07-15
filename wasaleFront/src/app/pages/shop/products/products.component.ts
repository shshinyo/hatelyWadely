import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SouqService } from "src/app/shared/services/souq.service";
import { QueryParams } from "src/app/shared/utilities/query-params";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  //  hide and show on hover (filter & carouser)
  displayCarousel = true;
  search: string | null = null;
  carouselOffers$ = this._souqSer.Offers$;
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
    private _souqSer: SouqService,
    private route: ActivatedRoute
  ) {}
  // start cards
  cards: any;
  secondCards: any;
  footerArray: any;

  // end cards

  ngOnInit(): void {
    this._souqSer.getAllCategories().subscribe((res: any) => {
      this.products = res.categories;
      console.log("yey", this.products);
      this.filteredProducts = res.categories;
    });
    this._souqSer.getAllCategories().subscribe((res: any) => {
      this.cards = res.cards;
      console.log(">>", this.cards);
    });
    this._souqSer.getAllCategories().subscribe((res: any) => {
      this.secondCards = res.secondCards;
      console.log(this.cards);
    });
    this._souqSer.getAllCategories().subscribe((res: any) => {
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
    this._souqSer.selectedCategoryBehaviour.next(this.selectedcategory);
  }
  showPic() {
    this.displayCarousel = !this.displayCarousel;

    this.diplayImg = true;
    this.displayDiv = false;
  }

  showP(x): void {
    console.log(x);
  }
}
