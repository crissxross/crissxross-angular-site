import { Component, OnInit } from '@angular/core';

import { ArtWork } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-fitting-the-pattern',
  templateUrl: './fitting-the-pattern.component.html',
  styleUrls: ['./fitting-the-pattern.component.scss']
})
export class FittingThePatternComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  fittingThePattern?: ArtWork;

  constructor() { }

  ngOnInit(): void {
    this.fittingThePattern = this.artworks.find( ( {id} ) => id === 'fitting-the-pattern');
  }

}
