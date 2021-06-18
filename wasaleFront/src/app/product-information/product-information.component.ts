import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SouqService } from '../souq/souq.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss']
})
export class ProductInformationComponent implements OnInit {

  product : any
  showForm = false
  constructor(private souqSer : SouqService , private route : ActivatedRoute , private fb : FormBuilder , private toastr : ToastrService) { }
  loginForm : FormGroup
  ngOnInit(): void {
    let myId = this.route.snapshot.params['id']
    let id = this.route.snapshot.params['secondId']
    if(myId == "mobile") {
      this.souqSer.getMobileId(id).subscribe(data=>{
        this.product = data
      })
    }else if (myId == "tv") {
      this.souqSer.gettvId(id).subscribe(data=>{
        this.product = data
      })
    }else if (myId == "kitchen") {
      this.souqSer.getdataId(id).subscribe(data=>{
        this.product = data
      })
    }

    this.loginForm = this.fb.group({
      name : ['',Validators.required],
      email : ['',Validators.required],
      phone :  ['',Validators.required]
    })
  }

  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
}

saveForm() {
  console.log(this.loginForm.value)
}
showMyForm() {
this.showForm = true
}

hideForm() {
  this.toastr.success('your request has approved' + ` ${this.loginForm.controls.name.value}` )
  this.showForm = false
}



}
