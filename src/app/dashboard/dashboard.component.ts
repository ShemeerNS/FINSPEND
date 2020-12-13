import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  viewMode: number = 1;
  bankId: number = -1;
  data = [];

  constructor() { } 

  @Output() public found = new EventEmitter<any>();
  
  BankAccounts = [
    {  id: 1234, name: 'CHASE' },
    {  id: 2345, name: 'BOA' },
    {  id: 3456, name: 'SCB' }
  ];

  ngOnInit() {
    this.viewMode = 1;
    console.log(this.viewMode);
  }
  setViewMode(bank: any) {
    this.viewMode = 2;
    this.bankId = bank.id;
    this.found.emit(bank)
  }

}
