import { Component, OnInit } from '@angular/core';

import { ArtWork } from '../../models/artwork.model';
import { artworksData } from '../../shared/artworks-data';

@Component({
  selector: 'cx-oot',
  templateUrl: './oot.component.html',
  styles: [],
})
export class OotComponent implements OnInit {

  allArtworks: ArtWork[] = artworksData;
  artworks: ArtWork[] = [];

  constructor() { }

  ngOnInit(): void {
    this.artworks = this.allArtworks.filter(
      artwork => artwork.tags?.includes('oot')
    )
  }

}
