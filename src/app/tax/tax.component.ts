import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {

  productCost:number;
  taxValue:number;
  total:number;
  taxAmount:number;

  ngOnInit () {

  }

  calculateTax() {
    //console.log( this.productCost + this.taxValue )
    this.taxAmount =  ((this.taxValue)*(this.productCost))/100;
    console.log(((this.taxValue)*(this.productCost))/100)
    this.total = this.productCost + this.taxAmount;
  }

}
