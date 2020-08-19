import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: 'transacions', component: TransactionsComponent },
  {path: 'summary', component: SummaryComponent },
  {path: 'create-transaction', component: CreateTransactionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
