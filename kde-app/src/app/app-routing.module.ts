import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExistingCustomerComponent } from './existing-customer/existing-customer.component';

import { NewCustomerComponent } from './new-customer/new-customer.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'existing-customer', component: ExistingCustomerComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
