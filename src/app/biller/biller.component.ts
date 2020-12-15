import { Component, OnInit } from '@angular/core';
import billerData from '../biller.json';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from "@angular/router";

interface biller {
    id:number;
    biller: string;
    amount: string;
    fromAccount: string;
    frequency: string;
    withdrawalDate: string;
}
@Component({
  selector: 'app-biller',
  templateUrl: './biller.component.html',
  styleUrls: ['./biller.component.css']
})
export class BillerComponent implements OnInit {
  billerForm: FormGroup = new FormGroup({
    biller: new FormControl(''),
    from:new FormControl(''),
    amount: new FormControl(''),
    frequency:new FormControl(''),
    withdrawalDate:new FormControl('')
}) ;
  constructor(private fb: FormBuilder,           
  private router:Router ){}

  ngOnInit(): void {
       this.buildForm();
  }
   private buildForm() {
    this.billerForm = this.fb.group({
      biller: ['', Validators.required],
      amount: ['', Validators.required],
       fromAccount: ['', Validators.required],
      frequency: ['', Validators.required],
       withdrawalDate: ['', Validators.required]
    });
  }
  isShown: boolean = false ; // hidden by default
isbillerShown: boolean = true;
billers: biller[] = billerData;
toggleShow() {

this.isShown = ! this.isShown;
this.isbillerShown = !this.isbillerShown;

}
addbillerdata()
{
  const formData = this.billerForm.value;
  let JSONDatas = [
  {"id": "3","biller":formData.biller,"amount":this.billerForm.value.amount,"fromAccount":this.billerForm.value.fromAccount,"frequency":this.billerForm.value.frequency,"withdrawalDate":this.billerForm.value.withdrawalDate}];
  let data = JSON.stringify(JSONDatas);//JSON.stringify(this.JSONDatas);
alert("Submitted Successfully");
this.isShown = ! this.isShown;
this.isbillerShown = !this.isbillerShown;
}
cancelbiller()
{
this.isShown = ! this.isShown;
this.isbillerShown = !this.isbillerShown;
}
}
