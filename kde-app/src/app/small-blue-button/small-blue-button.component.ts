import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-blue-button',
  templateUrl: './small-blue-button.component.html',
  styleUrls: ['./small-blue-button.component.scss']
})
export class SmallBlueButtonComponent implements OnInit {

  constructor() { }

  @Input() Text;

  ngOnInit(): void {
  }

}
