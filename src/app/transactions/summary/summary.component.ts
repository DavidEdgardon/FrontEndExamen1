import { Component, OnInit } from '@angular/core';
import { Summary } from '@angular/compiler';
import { Account } from 'src/app/shared/account'
import { AccountService } from 'src/app/core/account.service';
import { TransactionService } from 'src/app/core/transaction.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

//  summary : Summary;

  constructor(private transactionService : TransactionService) { }

  ngOnInit(): void {
  //  this.transactionService.getSummary(this.accountSelected.id)
 //     .subscribe(
  //      (summary : Summary) => this.summary = summary
  //  )
  }
}
