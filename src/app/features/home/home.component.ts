import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cx-home',
  template: `
    <cx-hero-section></cx-hero-section>
    <cx-showcase></cx-showcase>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
