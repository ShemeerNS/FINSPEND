import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  viewMode: number = 1;
  bankId: number = -1;
  bankName: string = "";
  bankNumber: string = "";
  public data;
  slNumber: number = 0;

  constructor(_appService: AppService) {
    this.data = _appService.getBankDetails();

    for (let bank of this.data.Bank) {
      this.slNumber++;
      this.BankAccounts.push({ id: this.slNumber, number:  Number(bank.AccountNumber.toString().substring(bank.AccountNumber.toString().length - 4)) , name: bank.Name, sufficientBalance: bank.Balance >= bank.PendingPayment });
    }
  }

  BankAccounts: {
    id: number;
    number: number;
    name: string;
    sufficientBalance: boolean;
  }[] = [];

  ngOnInit() {
    this.viewMode = 1;
  }
  setViewMode(bank: any) {
    this.viewMode = 2;
    this.bankId = bank.id;
    this.bankName = bank.name;
    this.bankNumber = bank.number;
  }

}
