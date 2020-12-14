import { Component, OnInit } from '@angular/core';
import billerData from '../biller.json';

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

  constructor() { }

  ngOnInit(): void {
  }
billers: biller[] = billerData;
}
