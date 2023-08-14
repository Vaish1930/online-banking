import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { RequestService } from '../request.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css'],
})
export class LoanRequestComponent {
  loanForm = this.formBuilder.group({
    amount: '',
    annualIncome: '',
    loanUsedFor: '',
  });
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private requestService: RequestService
  ) {}

  onInputChange = (event: any) => {
    const { name, value } = event.target;
    this.loanForm.patchValue({
      [name]: value,
    });
  };

  loanRequestSubmitHandler = async () => {
    try {
      const userId = parseInt(localStorage.getItem('userId'));
      console.log(this.loanForm.value);
      await this.requestService
        .addLoan({ ...this.loanForm.value, loanStatus: 'Pending' }, userId)
        .toPromise();
      Swal.fire({
        icon: 'success',
        title: 'Loan request placed!',
        text: 'Your Loan was Placed and will be approved by bank once verified',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Loan request Failure!',
        text: 'Something went wrong. Please try after',
      });
    }
  };
}
