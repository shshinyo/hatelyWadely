import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface Offer {
  imgUrl: string;
}
@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private readonly url = "../../assets/images/images/data.json";
  data = [
    { imgUrl: "../../assets/images/images/dd1.jpg" },
    { imgUrl: "../../assets/images/images/dd2.jpg" },
    { imgUrl: "../../assets/images/images/dd3.jpg" },
    { imgUrl: "../../assets/images/images/dd4.jpg" },
    { imgUrl: "../../assets/images/images/dd2.jpg" },
  ];
  getAllCategories$ = this.http.get<any>(this.url);
  // for test
  Offers$: Observable<Offer[]> = of(this.data);
  constructor(private http: HttpClient) {}
}
