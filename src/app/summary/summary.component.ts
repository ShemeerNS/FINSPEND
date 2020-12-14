import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  BankStatements = [
    {  sl: 1, Type: 'EMI', Amount :500.89, Wdate : '01/01/2021', Wtype: 'Standing Instruction', name: 'CHASE'},
    {  sl: 2, Type: 'Insurance', Amount :15000.00, Wdate : '01/01/2021', Wtype: 'Standing Instruction', name: 'BOA'},
    {  sl: 3, Type: 'Electricity', Amount :800.00, Wdate : '01/01/2021', Wtype: 'Manual', name: 'BOA'},
    {  sl: 4, Type: 'Mobile', Amount :500.89, Wdate : '01/01/2021', Wtype: 'Manual', name: 'BOA'},
    {  sl: 5, Type: 'EMI', Amount :500.89, Wdate : '01/01/2021', Wtype: 'Standing Instruction', name: 'BOA'},
    {  sl: 6, Type: 'EMI', Amount :500.89, Wdate : '01/01/2021', Wtype: 'Standing Instruction', name: 'BOA'},
    {  sl: 7, Type: 'EMI', Amount :500.89, Wdate : '01/01/2021', Wtype: 'Standing Instruction', name: 'BOA'},
    {  sl: 8, Type: 'EMI', Amount :500.89, Wdate : '01/01/2021', Wtype: 'Standing Instruction', name: 'SCB'}
  ];
  
  ngOnInit(): void {
  }

}
