import { Component, OnInit } from '@angular/core';

import { ArtWork } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-outoftouch',
  templateUrl: './outoftouch.component.html',
  styleUrls: ['./outoftouch.component.scss']
})
export class OutoftouchComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  outoftouch?: ArtWork;

  constructor() { }

  ngOnInit(): void {
    // uses destructuring
    this.outoftouch = this.artworks.find( ( {id} ) => id === 'out-of-touch');
  }

}