import { SouqService } from './../souq.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.scss']
})
export class MainProductsComponent implements OnInit {
  videoURL : string = "https://www.youtube.com/embed/QYUqHLAN47o";
  safeURL
  displyDiv : boolean = false;
  displyKitchen : boolean = false;
  displyTv : boolean = false;
  product;

  constructor( private _sanitizer: DomSanitizer ,
               private route : ActivatedRoute ,
               private souqSer : SouqService){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL)  }

    ngOnInit(): void {

   

    }
}
