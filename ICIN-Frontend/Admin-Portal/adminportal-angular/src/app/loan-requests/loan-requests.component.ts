import { Component, OnInit } from '@angular/core';
import { CheckbookService } from '../checkbook.service';

@Component({
  selector: 'app-loan-requests',
  templateUrl: './loan-requests.component.html',
  styleUrls: ['./loan-requests.component.css'],
})
export class LoanRequestsComponent implements OnInit {
  constructor(private requestService: CheckbookService) {}

  loans: any = [];

  getAllLoans = async () => {
    try {
      const data = await this.requestService.getLoans().toPromise();
      this.loans = data;
    } catch (error) {
      console.log(error);
    }
  };

  updateLoan = async (id: number, loanStatus: string) => {
    try {
      await this.requestService.updateLoan(id, { loanStatus }).toPromise();
      this.getAllLoans();
    } catch (error) {
      console.log(error);
    }
  };

  ngOnInit(): void {
    this.getAllLoans();
  }
}
