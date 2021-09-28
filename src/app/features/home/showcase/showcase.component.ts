import { Component, OnInit } from '@angular/core';

import { ArtWork } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-showcase',
<<<<<<< HEAD
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
=======
  template: `
    <main class="container">
      <h1 class="page-title">Creative Works</h1>
      <div class="grid-auto">
        <div *ngFor="let artwork of artworks" class="artwork">
          <cx-artwork-card [artwork]="artwork" class="crissxross-light-theme"
          ></cx-artwork-card>
        </div>
      </div>
    </main>
  `,
  styles: [],
>>>>>>> development
})
export class ShowcaseComponent implements OnInit {

  allArtworks: ArtWork[] = artworksData;
  artworks: ArtWork[] = [];

  constructor() { }

  ngOnInit(): void {
    this.artworks = this.allArtworks.filter(
      artwork => artwork.tags?.includes('showcase')
    )
  }

}
