import { Injectable } from '@angular/core';
import { Banks } from './bank.model';

import bankData from './bankaacounts.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  BankAccounts: Banks = bankData; 
  pendingPay:number=0;

  constructor() { 
    for (let bank of this.BankAccounts.Bank) {
      this.pendingPay = 0;
      for (let standing of bank.StandingInstr) {
        this.pendingPay+=standing.Amount;
      }
      for (let biller of bank.Biller) {
        this.pendingPay+=biller.Amount;
      }
      bank.PendingPayment=this.pendingPay;
    }
  }

  getBankDetails() {  
    return this.BankAccounts;  
  }

}
