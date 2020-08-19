import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../shared/transaction';
import { catchError } from 'rxjs/operators';
import { Summary } from '../shared/summary';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl: string = "https://localhost:44343/api/Transaction";
  baseUrl2: string = "https://localhost:44343/api/Transaction/:id/summary";

  constructor(private httpClient : HttpClient) { }

  getTransactions(): Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)
    );
  }
  
  addTransaction(transaction : Transaction): Observable<Transaction>{
    return this.httpClient.post<Transaction>(this.baseUrl, transaction)
    .pipe(
      catchError(this.handleError)
    );
  }  

  getSummary(id : number): Observable<Summary>{
    return this.httpClient.get<Summary>(this.baseUrl2)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error : any){
    console.error('server error:', error);
    if(error.error instanceof Error){
      const errorMessage = error.error.message;
      return Observable.throw(errorMessage);
    }

    return Observable.throw(error || 'Server error');
  }
}
