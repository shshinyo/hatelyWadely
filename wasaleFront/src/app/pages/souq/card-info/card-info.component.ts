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
mySelectedCategory
  constructor(private souqSer : SouqService , private route : ActivatedRoute) {
    this.souqSer.selectedCategoryObserve.subscribe(res=>this.mySelectedCategory = res)
  }

  ngOnInit(): void {
    this.souqSer.getAllCategories().subscribe(res=>{
      this.options = res.options
    })
    let id = this.route.snapshot.params['productType']
    let myId =  this.route.snapshot.params['productName']
    let myLastId = this.route.snapshot.params['cartId']
    this.souqSer.getAllCategories().subscribe(res=>{
      this.product = res.categories.find(elem=>elem.id == this.mySelectedCategory).myProducts.find(elem=>elem.id == id).myProductss.find(elem=>elem.id == myId).details.find(elem=>elem.id == myLastId)
      console.log('haha',this.product)
    })
  }


}
