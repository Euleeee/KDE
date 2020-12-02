import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {

  constructor() { }

  isMail: boolean = false;
  isPhone: boolean = false;
  isRegistered: boolean = false;

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

  
  @Output() removeEvent = new EventEmitter();
  
  removePerson() {
    
    console.log(this.number)
    /**this.removeCustomer(this.number)*/
    this.removeEvent.emit(this.number)
  }

  mandatory(source) {

    if (source === 'mail') {
      if (this.mail === '') {
        this.isMail = false;
      }
      else {
        this.isMail = true;
      }

      if(this.mail === 'max-mustermann@web.de') {
        this.isRegistered = true;
      }

    }

    if (source === 'phone') {
      if (this.phone === '') {
        this.isPhone = false;
      }
      else {
        this.isPhone = true;
      }

      if(this.phone === '07131/123456' || this.phone === '07131123456') {
        this.isRegistered = true;
      }

    }



  }
}
