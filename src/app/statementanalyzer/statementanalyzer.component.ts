import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-statementanalyzer',
  templateUrl: './statementanalyzer.component.html',
  styleUrls: ['./statementanalyzer.component.css']
})
export class StatementanalyzerComponent implements OnInit {
 public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Shopping'], ['Investment'], 'Expenditure'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor() {  monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();}

  ngOnInit(): void {
  }
}
