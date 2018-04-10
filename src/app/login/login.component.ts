import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../shared/services/accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountsService]
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  invalidUsername: boolean = false;
  invalidPassword: boolean = false;

  constructor(private accountsServce: AccountsService) { }

  ngOnInit() {
  }

  login() {
    //accountservice call.
  }

}
