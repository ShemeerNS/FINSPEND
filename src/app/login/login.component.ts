import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import {LoginService } from "../login/login.service";
import {LoginResponse} from "../login/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
}) ;
  response : LoginResponse = new LoginResponse();

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router:Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginSubmit(){
    this.loginService.loginUser(this.loginForm?.value).subscribe(resp => {
      this.response=resp;
      if(this.response.success){
        this.router.navigate(['dashboard'])
      }});
  }
}

