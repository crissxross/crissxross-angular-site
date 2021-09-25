import { Component, OnInit } from '@angular/core';

import { ArtWork } from '../../models/artwork.model';
import { artworksData } from '../../shared/artworks-data';

@Component({
  selector: 'cx-movingpix',
  templateUrl: './movingpix.component.html',
  styleUrls: ['./movingpix.component.scss']
})
export class MovingpixComponent implements OnInit {

  allArtworks: ArtWork[] = artworksData;
  artworks: ArtWork[] = [];

  constructor() { }

  ngOnInit(): void {
    this.artworks = this.allArtworks.filter(
      artwork => artwork.tags?.includes('movingpix')
    )
  }

}
