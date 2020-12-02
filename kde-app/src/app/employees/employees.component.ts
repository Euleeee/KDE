import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Router } from '@angular/router';

import { EmployeesDialogComponent } from '../employees-dialog/employees-dialog.component'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(public router: Router, public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['']);
  }

  forward() {
    const dialogRef = this.dialog.open(EmployeesDialogComponent, {
      width: '500px',
      panelClass: 'my-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
    
  }
  

}
