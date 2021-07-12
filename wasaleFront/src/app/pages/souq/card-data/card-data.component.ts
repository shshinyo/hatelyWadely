import { find } from 'rxjs/Operators';
import { ActivatedRoute } from '@angular/router';
import { SouqService } from '../../../services/souq.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.scss']
})
export class CardDataComponent implements OnInit {
myProduct
options
cardProducts


  constructor(private souqSer : SouqService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.souqSer.getAllCategories().subscribe(res=>{
      this.options = res.options
    })
     let myCardId = this.route.snapshot.params['id']
     this.souqSer.getAllCategories().subscribe(res=>{
       this.myProduct = res.cards.find(elem=>elem.id == myCardId)
     })
    let myCardId2 = this.route.snapshot.params['id']
    this.souqSer.getAllCategories().subscribe(res=>{
      this.myProduct = res.secondCards.find(elem=>elem.cardProducts).cardProducts.find(elem=>elem.id == myCardId2)
      console.log('belo',this.myProduct)
    })
  }

}
