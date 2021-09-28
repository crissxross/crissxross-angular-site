import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cx-hero-section',
<<<<<<< HEAD
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
=======
  template: `
    <header class="container hero-section">
      <h1>Christine Wilks</h1>
      <h2>digital writer, artist, developer & practice-based researcher... @crissxross</h2>
    </header>
  `,
  styles: [],
>>>>>>> development
})
export class HeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
