import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-new-customer-dialog',
  templateUrl: './new-customer-dialog.component.html',
  styleUrls: ['./new-customer-dialog.component.scss']
})
export class NewCustomerDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewCustomerDialogComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  newCustomer() {
    this.dialogRef.close('new');
  }

  existingCustomer() {
    this.dialogRef.close('existing');
  }

}
