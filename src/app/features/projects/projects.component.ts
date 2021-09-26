import { Component, OnInit } from '@angular/core';

import { ArtWork } from '../../models/artwork.model';
import { artworksData } from '../../shared/artworks-data';

@Component({
  selector: 'cx-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  allArtworks: ArtWork[] = artworksData;
  artworks: ArtWork[] = [];

  constructor() { }

  ngOnInit(): void {
    this.artworks = this.allArtworks.filter(
      artwork => artwork.tags?.includes('projects')
    )
  }

}
