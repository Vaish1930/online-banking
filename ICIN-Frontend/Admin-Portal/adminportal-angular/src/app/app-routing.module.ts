import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { CheckbookRequestsComponent } from './checkbook-requests/checkbook-requests.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizeRegistrationComponent } from './authorize-registration/authorize-registration.component';
import { LoanRequestsComponent } from './loan-requests/loan-requests.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'user-account',
    component: UserAccountComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'checkbook-requests',
    component: CheckbookRequestsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'loan-requests',
    component: LoanRequestsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'authorize',
    component: AuthorizeRegistrationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'loan-requests',
    component: LoanRequestsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
