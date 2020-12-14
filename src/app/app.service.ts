import { Injectable } from '@angular/core';
import { Banks } from './bank.model';

import bankData from './bankaacounts.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  BankAccounts: Banks = bankData; 

  constructor() { }


}
