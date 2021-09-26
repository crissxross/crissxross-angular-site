import { Component, OnInit } from '@angular/core';

import { ArtWork } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-stitched-up',
  templateUrl: './stitched-up.component.html',
  styles: [
  ]
})
export class StitchedUpComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  stitchedUp?: ArtWork;

  constructor() { }

  ngOnInit(): void {
    this.stitchedUp = this.artworks.find( ( {id} ) => id === 'stitched-up');
  }

}
