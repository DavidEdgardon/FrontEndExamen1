import { Component, OnInit } from '@angular/core';
import { Transaction } from '../shared/transaction';
import { TransactionService } from '../core/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions : Transaction[];

  accountSelected: Account;
  constructor(private transacionsService : TransactionService) { }


  ngOnInit(): void {
    this.transacionsService.getTransactions()
      .subscribe(
        (transaction : Transaction[]) => this.transactions = transaction
      )
      }
}
