import { find } from 'rxjs/Operators';
import { ActivatedRoute } from '@angular/router';
import { SouqService } from '../../../shared/services/souq.service';
import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
options
city
product
selectedCategory
myArray : []
  constructor(private souqSer : SouqService , private route : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.souqSer.getAllCategories().subscribe(res=>{
      this.options = res.options
    })
    this.souqSer.selectedCategoryObserve.subscribe(res=>console.log('oh',res))
    let id = this.route.snapshot.params['productType']
    this.selectedCategory = this.route.snapshot.params['selectedCategory']
    let myId =  this.route.snapshot.params['productName']
    let myLastId = this.route.snapshot.params['cartId']

    this.souqSer.getAllCategories().subscribe(res=>{
      this.product = res.categories.find(elem=>elem.id == this.selectedCategory).myProducts.find(elem=>elem.id == id).myProductss.find(elem=>elem.id == myId).details.find(elem=>elem.id == myLastId)
      console.log('haha',this.product)
    })
  }
  pushInSelect(myOption) {
    console.log(myOption)

  }

}
