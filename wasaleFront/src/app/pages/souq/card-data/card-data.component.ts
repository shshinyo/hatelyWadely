import { Router } from '@angular/router';
import { find } from 'rxjs/Operators';
import { ActivatedRoute } from '@angular/router';
import { SouqService } from '../../../shared/services/souq.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.scss']
})
export class CardDataComponent implements OnInit {
myProduct
options



  constructor(private souqSer : SouqService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.souqSer.getAllCategories().subscribe(res=>{
      this.options = res.options
    })
     let myCardId = this.route.snapshot.params['id']
     this.souqSer.getAllCategories().subscribe(res=>{
       this.myProduct = res.cards.find(elem=>elem.id == myCardId)
     })
  }
  addToCart(myProduct) {
    this.souqSer.cart.push(myProduct)
    this.router.navigate(['cart/info'])
  }

}
