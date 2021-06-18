import { ActivatedRoute, Router } from '@angular/router';
import { SouqService } from './../souq.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-data',
  templateUrl: './products-data.component.html',
  styleUrls: ['./products-data.component.scss']
})
export class ProductsDataComponent implements OnInit {
  _listFilter : string = ''
  constructor(private souqSer : SouqService , private route : ActivatedRoute  , public router : Router) {

   }
  products = []
  filteredProducts = []
  myId : any ;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.FilterMethod(this.listFilter) : this.products;
  }

  FilterMethod(listFilter) {
    listFilter = listFilter.toLocaleLowerCase();
    return this.products.filter((product: any) =>
      product.title.toLocaleLowerCase().indexOf(listFilter) !== -1);

  }



  ngOnInit(): void {
    this.myId  = this.route.snapshot.params['id']
    if(this.myId == "tv") {
      this.souqSer.getTvsData().subscribe(data=>{
        this.products = data
        console.log('tv',data)
        this.filteredProducts = this.products;
      })
    }else if(this.myId == "mobile") {
      this.souqSer.getMobileData().subscribe(data=>{
        this.products = data
        console.log('mob',this.products)
        this.filteredProducts = this.products;
      })
    }else if (this.myId == "kitchen") {
      this.souqSer.getKitchenData().subscribe(data=>{
        this.products = data
        console.log('kit',this.products)
        this.filteredProducts = this.products;
      })
    }

}
}
