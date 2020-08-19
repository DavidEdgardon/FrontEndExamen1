import { Component, OnInit } from '@angular/core';
import { Account } from '../shared/account';
import { AccountService } from '../core/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts : Account[];

  accountSelected: Account;
  constructor(private accountService : AccountService) { }


  ngOnInit(): void {
    this.accountService.getAccounts()
      .subscribe(
        (accounts : Account[]) => this.accounts = accounts
      )

  }
}
