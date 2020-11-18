import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-blue-button',
  templateUrl: './big-blue-button.component.html',
  styleUrls: ['./big-blue-button.component.scss']
})
export class BigBlueButtonComponent implements OnInit {

  constructor() { }

  @Input() Text;

  ngOnInit(): void {
  }

}
