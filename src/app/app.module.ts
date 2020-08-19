import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountModule } from './accounts/account.module';
import { TransactionModule } from './transactions/transaction.module';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    AccountsComponent,
    AccountModule,
    TransactionModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
