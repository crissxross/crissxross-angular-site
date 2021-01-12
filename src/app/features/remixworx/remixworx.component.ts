import { Component, OnInit } from '@angular/core';

import { ArtWork } from '../../models/artwork.model';
import { artworksData } from '../../shared/artworks-data';

@Component({
  selector: 'cx-remixworx',
  templateUrl: './remixworx.component.html',
  styleUrls: ['./remixworx.component.scss']
})
export class RemixworxComponent implements OnInit {

  allArtworks: ArtWork[] = artworksData;
  artworks: ArtWork[] = [];

  constructor() { }

  ngOnInit(): void {
    this.artworks = this.allArtworks.filter(
      artwork => artwork.displayGroup === 'remixworx'
    )
  }

}
