import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, OnChanges {

  public data;
  totalCash: number;
  pendingPay: number;
  slNumber: number = 0;
  sufficientBalance: boolean;

 BankStatements: {
    sl: number;
    Type: string;
    Amount: number;
    Wdate: string;
    Wtype: string;
    name: string;
  }[] = [];

  BankStatement = this.BankStatements;
  @Input() bankName!: string;

  constructor(_appService: AppService) {
    this.sufficientBalance = true;
    this.data = _appService.getBankDetails();
    this.totalCash = 0;
    this.pendingPay = 0;
    for (let bank of this.data.Bank) {
      //if (bank.Name == this.bankName) {
        for (let standing of bank.StandingInstr) {
          this.slNumber++;
          this.BankStatements.push({ sl: this.slNumber, Type: standing.Type, Amount: standing.Amount, Wdate: standing.Wdate, Wtype: standing.Wtype, name: bank.Name });
        }
        for (let biller of bank.Biller) {
          this.slNumber++;
          this.BankStatements.push({ sl: this.slNumber, Type: biller.Name, Amount: biller.Amount, Wdate: biller.Wdate, Wtype: biller.Wtype, name: bank.Name });
        }
      //}
    }    
  }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {  
    this.BankStatement = this.BankStatements.filter(b => b.name == this.bankName);
    for (let bank of this.data.Bank) {
      if (bank.Name == this.bankName) {
        this.totalCash = bank.Balance;
        this.pendingPay = this.BankStatement.reduce((sum, current) => sum + current.Amount, 0);;
      }
    }
    this.sufficientBalance = this.totalCash >= this.pendingPay;
  }
}

