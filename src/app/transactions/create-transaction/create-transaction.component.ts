import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/core/transaction.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  form: FormGroup;

  constructor(private transactionService : TransactionService, private router : Router) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm() : FormGroup{
    return new FormGroup({
      description: new FormControl("", Validators.required),
      amount: new FormControl(0, Validators.required),
      account: new FormControl(0, Validators.required),
      Transactiondate: new FormControl(0, Validators.required)
    });
  }

  onSubmit(){
    const transaction = this.form.value;
  //  this.transactionService.addTransaction({
    //  account : transaction.account,
    //  amount: transaction.amount,
    //description : transaction.description, 
    //  transactionDate : transaction.Transactiondate
  //  })
//    .subscribe((data : any) => this.router.navigate(["/Accounts"]));
  }
}
