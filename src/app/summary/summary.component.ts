import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  BankStatements = [
    {  id: 1234, name: 'CHASE' },
    {  id: 2345, name: 'BOA' },
    {  id: 3456, name: 'SCB' }
  ];
  
  ngOnInit(): void {
  }

}
