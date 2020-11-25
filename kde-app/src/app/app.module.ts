import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { BigBlueButtonComponent } from './big-blue-button/big-blue-button.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { ExistingCustomerComponent } from './existing-customer/existing-customer.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { SmallBlueButtonComponent } from './small-blue-button/small-blue-button.component';
import { NewCustomerDialogComponent } from './new-customer-dialog/new-customer-dialog.component';
import { AcceptComponent } from './accept/accept.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    BigBlueButtonComponent,
    WelcomeComponent,
    NewCustomerComponent,
    ExistingCustomerComponent,
    CustomerDataComponent,
    SmallBlueButtonComponent,
    NewCustomerDialogComponent,
    AcceptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
