import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cx-hero-section',
  template: `
    <header class="container hero-section">
      <h1>Christine Wilks</h1>
      <h2>digital writer, artist, developer & practice-based researcher... @crissxross</h2>
    </header>
  `,
  styles: [],
})
export class HeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
