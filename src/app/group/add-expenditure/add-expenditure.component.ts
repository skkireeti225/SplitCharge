import { Component, OnInit, ViewChild } from '@angular/core';
import  { NgForm }from "@angular/forms";

@Component({
  selector: 'app-add-expenditure',
  templateUrl: './add-expenditure.component.html',
  styleUrls: ['./add-expenditure.component.css']
})
export class AddExpenditureComponent implements OnInit {

 calculatedAmount = [{
		"name": "caren",
		"payableAmount": "10$",
		"RecivebleAmount": "0$"
	},
	{
		"name": "caren p",
		"payableAmount": "10$",
		"RecivebleAmount": "0$"
	},
	{
		"name": "caren k",
		"payableAmount": "0$",
		"RecivebleAmount": "20$"
	}
];


@ViewChild('f') expensiveForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.expensiveForm.form.value);
  }

}
