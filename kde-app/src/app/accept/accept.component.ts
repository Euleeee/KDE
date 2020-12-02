import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss']
})
export class AcceptComponent implements OnInit {

  constructor(public router: Router) { }

  checked: boolean = false;
  one: boolean = false;
  two: boolean = false;

  ngOnInit(): void {
  }

  back() {
    if (confirm("Möchten Sie wirklich zurück? \nAlle eingegebenen Daten gehen verloren!")) {
      this.router.navigate(['']);
    }
  }

  forward() {
    console.log(this.one);
    if (this.one && this.two) {
      console.log()
      this.router.navigate(['logged-in'])
    }
    else {
      if (confirm("Bitte akzeptieren Sie alle Bedingungen,\num fortzufahren.")) {
        this.router.navigate(['accept'])
      }
      
    }
  }

  changeOne(event) {
    this.one = event.checked;
  }

  changeTwo(event) {
    this.two = event.checked;
  }
}
