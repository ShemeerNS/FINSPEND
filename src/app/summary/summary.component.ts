import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { AppService } from '../app.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  public data;
  totalCash: number;
  pendingPay: number;
  slNumber: number = 0;
  sufficientBalance: boolean;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor(_appService: AppService) {
    this.sufficientBalance = true;
    this.data = _appService.getBankDetails();
    this.totalCash = 0;
    this.pendingPay = 0;

    for (let bank of this.data.Bank) {

      this.pieChartLabels.push(bank.Name);
      this.pieChartData.push(bank.Balance);

      this.totalCash += bank.Balance;
      this.pendingPay += bank.PendingPayment;
      if (this.sufficientBalance) {
        this.sufficientBalance = bank.Balance >= bank.PendingPayment;
      }
      for (let standing of bank.StandingInstr) {
        this.slNumber++;
        this.BankStatements.push({ sl: this.slNumber, Type: standing.Type, Amount: standing.Amount, Wdate: standing.Wdate, Wtype: standing.Wtype, name: bank.Name });
      }
      for (let biller of bank.Biller) {
        this.slNumber++;
        this.BankStatements.push({ sl: this.slNumber, Type: biller.Name, Amount: biller.Amount, Wdate: biller.Wdate, Wtype: biller.Wtype, name: bank.Name });
      }
    }

    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  BankStatements: {
    sl: number;
    Type: string;
    Amount: number;
    Wdate: string;
    Wtype: string;
    name: string;
  }[] = [];

  ngOnInit(): void {
  }

}
