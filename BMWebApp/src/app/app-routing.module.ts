import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBeneficiaryComponent } from './beneficiaries/add-beneficiary/add-beneficiary.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries/beneficiaries.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './users/add-user/add-user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Home', component: BeneficiariesComponent, canActivate: [AuthGuard] },
  { path: 'AddBeneficiary', component: AddBeneficiaryComponent , canActivate: [AuthGuard]},
  { path: 'Register', component: AddUserComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
