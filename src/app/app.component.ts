import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { Banks } from './bank.model';

import bankData from './bankaacounts.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'FINSPEND';
  BankAccounts: Banks = bankData; 

  ngOnInit() {
    console.log(this.BankAccounts.Bank[1].Name)
    console.log(this.BankAccounts.Bank[1].Statement[0].Wdate)
  }
  
}
