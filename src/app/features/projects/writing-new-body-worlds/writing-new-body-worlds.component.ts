import { Component, OnInit } from '@angular/core';

import { ArtWork } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-writing-new-body-worlds',
  templateUrl: './writing-new-body-worlds.component.html',
  styles: [
  ]
})
export class WritingNewBodyWorldsComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  writingNewBodyWorlds?: ArtWork;

  constructor() { }

  ngOnInit(): void {
    this.writingNewBodyWorlds = this.artworks.find( ( {id} ) => id === 'writing-new-body-worlds');
  }

}
