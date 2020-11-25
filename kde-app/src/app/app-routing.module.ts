import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptComponent } from './accept/accept.component';
import { ExistingCustomerComponent } from './existing-customer/existing-customer.component';

import { NewCustomerComponent } from './new-customer/new-customer.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'existing-customer', component: ExistingCustomerComponent },
  { path: 'accept', component: AcceptComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
