import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatementanalyzerComponent } from './statementanalyzer/statementanalyzer.component';
import { BillerComponent } from './biller/biller.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { AccountComponent } from './account/account.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';
import { AddbillerComponent } from './addbiller/addbiller.component';
import { AppService } from './app.service';

import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    StatementanalyzerComponent,
    BillerComponent,
    DashboardComponent,
    NewaccountComponent,
    AccountComponent,
    LoginComponent,
    SummaryComponent,
    AddbillerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
