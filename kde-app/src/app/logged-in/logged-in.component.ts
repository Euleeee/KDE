import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  menu() {
    window.open("https://www.mcdonalds.com/de/de-de/produkte/alle-produkte.html", "_blank");
  }

  leave() {
    this.router.navigate(['']);
  }
}
