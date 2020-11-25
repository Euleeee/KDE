import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss']
})
export class AcceptComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  back() {
    if (confirm("Möchten Sie wirklich zurück? \nAlle eingegebenen Daten gehen verloren!")) {
      this.router.navigate(['']);
    }
  }

}
