import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  links = {};

  constructor() {

  }

  ngOnInit() {
    this.links = {
      left: "/home",
      top: "/contact",
      right: "/home",
      bottom: "/contact"
    }
  }

}
