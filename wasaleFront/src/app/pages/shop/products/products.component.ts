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
      this.filteredProducts = res.categories;
      this.cards = res.cards;
      this.secondCards = res.secondCards;
      this.footerArray = res.myFooter;
    })
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
    this.displayDiv = true;
    this.diplayImg = false;
    this.selectedcategory = product.id;
    console.log(this.selectedcategory);
    this._souqSer.selectedCategoryBehaviour.next(this.selectedcategory);
  }
  // showDiv() {
  //   this.diplayImg = false;
  //   this.displayDiv = true;
  // }
   hideDiv() {
     this.diplayImg = true;
      this.displayDiv = false;
   }


}
