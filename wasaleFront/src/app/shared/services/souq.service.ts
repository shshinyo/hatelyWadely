import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { debounceTime } from "rxjs/Operators";

@Injectable({
  providedIn: "root",
})
export class SouqService implements OnInit {
  cart = [];
  mySpan = 0
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
