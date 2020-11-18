import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCustomerComponent } from './new-customer/new-customer.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'welcome', component: WelcomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
