import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Router } from '@angular/router'

import { NewCustomerDialogComponent } from '../new-customer-dialog/new-customer-dialog.component'

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

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  customerList = [];

  ngOnInit(): void {
    this.customerList.push(new customer);
    
    console.log(this.customerList);
  }

  addCustomer() {
    const dialogRef = this.dialog.open(NewCustomerDialogComponent, {
      width: '500px',
      panelClass: 'my-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      var temp = new customer;

      if (result === 'new') {
        temp.exists = false;
        this.customerList.push(temp);
      }
      else if (result === 'existing') {
        temp.exists = true;
        this.customerList.push(temp);
      }
    });
  }
  
  removeCustomer(indexNumber): void {
    const index: number = indexNumber -1;

    if (index > 0) {
      this.customerList.splice(index, 1);
    }
  }


  back() {
    if (confirm("Möchten Sie wirklich zurück? \nAlle eingegebenen Daten gehen verloren!")) {
      this.router.navigate(['']);
    }
  }

}
