import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [CreateTransactionComponent, SummaryComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
