import { Component } from '@angular/core';

import { AccountsService } from './shared/services/accounts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent {
  title = 'app';
  users: {name: string, password: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  init() {
    this.users = this.accountsService.userAccounts;
  }
}
