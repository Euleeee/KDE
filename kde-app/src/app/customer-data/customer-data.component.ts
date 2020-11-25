import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {

  constructor() { }

  @Input() number;
  @Input() firstName;
  @Input() lastName;
  @Input() mail;
  @Input() phone;
  @Input() exists;
  @Input() notifies;


  ngOnInit(): void {
    console.log(this.firstName);
  }

}
