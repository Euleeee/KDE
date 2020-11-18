import { Component, OnInit } from '@angular/core';

class customer {
  firstName: string;
  lastName: string;
  mail: string;
  phone: string;
  exists: boolean;
  notifies: boolean

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.mail = '';
    this.phone = '';
    this.exists = false;
    this.notifies = false;
  }
}
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor() { }

  customerList = [];

  ngOnInit(): void {
    this.customerList.push(new customer);
    console.log(this.customerList);
  }

}
