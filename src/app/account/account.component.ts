import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Input, OnChanges, SimpleChanges  } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, OnChanges  {

  BankStatements = [
    { sl: 1, Type: 'EMI', Amount: 500.89, Wdate: '01/01/2021', Wtype: 'Standing Instruction', name: 'CHASE' },
    { sl: 2, Type: 'Insurance', Amount: 15000.00, Wdate: '01/01/2021', Wtype: 'Standing Instruction', name: 'BOA' },
    { sl: 3, Type: 'Electricity', Amount: 800.00, Wdate: '01/01/2021', Wtype: 'Manual', name: 'BOA' },
    { sl: 4, Type: 'Mobile', Amount: 500.89, Wdate: '01/01/2021', Wtype: 'Manual', name: 'BOA' },
    { sl: 5, Type: 'EMI', Amount: 500.89, Wdate: '01/01/2021', Wtype: 'Standing Instruction', name: 'BOA' },
    { sl: 6, Type: 'EMI', Amount: 500.89, Wdate: '01/01/2021', Wtype: 'Standing Instruction', name: 'BOA' },
    { sl: 7, Type: 'EMI', Amount: 500.89, Wdate: '01/01/2021', Wtype: 'Standing Instruction', name: 'BOA' },
    { sl: 8, Type: 'EMI', Amount: 500.89, Wdate: '01/01/2021', Wtype: 'Standing Instruction', name: 'SCB' }
  ];

  BankStatement = this.BankStatements;
  @Input() bankName!: string;

  constructor() {

   
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.BankStatement = this.BankStatements.filter(b => b.name == this.bankName);
  }

  ngOnInit(): void {   

  }

}
