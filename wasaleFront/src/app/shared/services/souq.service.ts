import { BehaviorSubject, from, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { debounceTime } from "rxjs/Operators";

export interface Offer {
  imgUrl: string;
}
@Injectable({
  providedIn: "root",
})
export class SouqService implements OnInit {
  cart = [];
  mySpan = 0;
  data = [
    { imgUrl: "../../assets/images/images/dd1.jpg" },
    { imgUrl: "../../assets/images/images/dd2.jpg" },
    { imgUrl: "../../assets/images/images/dd3.jpg" },
    { imgUrl: "../../assets/images/images/dd4.jpg" },
  ];
  Offers$: Observable<Offer> = from(this.data);
  constructor(private http: HttpClient) {}
  ngOnInit() {}

  getAllCategories(): Observable<any> {
    let url = "../../assets/images/images/data.json";
    return this.http.get<any>(url);
  }

  selectedCategoryBehaviour = new BehaviorSubject<any>(null);
  selectedCategoryObserve = this.selectedCategoryBehaviour.asObservable();

  myCartArrayBehaviour = new BehaviorSubject<any>(null);
  myCartObservable = this.myCartArrayBehaviour.asObservable();
}
