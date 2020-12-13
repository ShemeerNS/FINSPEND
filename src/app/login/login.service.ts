import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import {LoginResponse} from "../login/login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  loginUser(value: any): Observable<LoginResponse> {
    var response : LoginResponse = new LoginResponse();
   if(value.username=='admin' && value.password=='admin'){
     response.success = true;
   }else{
     response.success = false;
   }
  return of(response);
}
}
