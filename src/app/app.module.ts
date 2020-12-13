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

@NgModule({
  declarations: [
    AppComponent,
    StatementanalyzerComponent,
    BillerComponent,
    DashboardComponent,
    NewaccountComponent,
    AccountComponent,
    LoginComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
