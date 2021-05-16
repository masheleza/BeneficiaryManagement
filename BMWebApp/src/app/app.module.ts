import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries/beneficiaries.component';
import { AddBeneficiaryComponent } from './beneficiaries/add-beneficiary/add-beneficiary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatOptionModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmComponent } from './shared/confirm/confirm.component';
import { PleaseWaitComponent } from './shared/please-wait/please-wait.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiMsgService } from './services/ui-msg.service';
import { Jwt } from './helpers/jwt';
import { AuthenticationService } from './services/authentication.service';
import { UsersService } from './services/users.service';
import { BeneficiariesService } from './services/beneficiaries.service';
import { EditBeneficiaryComponent } from './beneficiaries/edit-beneficiary/edit-beneficiary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    UsersComponent,
    AddUserComponent,
    BeneficiariesComponent,
    AddBeneficiaryComponent,
    ConfirmComponent,
    PleaseWaitComponent,
    EditBeneficiaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatTreeModule,
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule
  ],
  exports:[RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Jwt,
      multi: true,
    },
    UiMsgService,
    AuthenticationService,
    UsersService,
    BeneficiariesService,
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  entryComponents: [
    PleaseWaitComponent,
    ConfirmComponent,
    EditBeneficiaryComponent,
    AddBeneficiaryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
