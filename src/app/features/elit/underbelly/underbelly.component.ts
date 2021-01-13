import { Component, OnInit } from '@angular/core';

import { ArtWork } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-underbelly',
  templateUrl: './underbelly.component.html',
  styleUrls: ['./underbelly.component.scss']
})
export class UnderbellyComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  underbelly?: ArtWork;

  constructor() { }

  ngOnInit(): void {
    this.underbelly = this.artworks.find( ( {id} ) => id === 'underbelly');
  }

}
