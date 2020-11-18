import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  restaurant = 'McDonald´s'

  ngOnInit(): void {
  }

  newCustomer() {
    console.log('neu');
  }

  existingCustomer() {
    console.log('bestehend');
  }

}
