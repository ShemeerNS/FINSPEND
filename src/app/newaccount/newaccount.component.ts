import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  public accountlisted = new FormGroup({
    title: new FormControl(''),
    accounts: new FormControl(''),
    linktheaccount: new FormControl(''),
    addaccounts: new FormControl('')
    // yearofrelease: new FormControl(),
    // rating: new FormControl(),
    // edit: new FormControl(),
    // delete:new FormControl()
   
 });
  ngOnInit(): void {
  }
  homeagainscreen()
  {
    this.router.navigate(['/homescreen']);
  }


}
