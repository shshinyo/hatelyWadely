import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { debounceTime } from "rxjs/Operators";

@Injectable({
  providedIn: "root",
})
export class SouqService implements OnInit {
  cart = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  getAllCategories(): Observable<any> {
    let url = "../../assets/images/images/data.json";
    return this.http.get<any>(url);
  }

  selectedCategoryBehaviour = new BehaviorSubject<any>(null);
  selectedCategoryObserve = this.selectedCategoryBehaviour.asObservable();

  myCartBehaviour = new BehaviorSubject<any>(0);
  myObserveCart = this.myCartBehaviour.asObservable();

  myCartArrayBehaviour = new BehaviorSubject<any>(null);
  myCartObservable = this.myCartArrayBehaviour.asObservable();
}
