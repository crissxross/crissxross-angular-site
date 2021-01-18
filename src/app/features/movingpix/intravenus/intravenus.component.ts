import { Component, OnInit } from '@angular/core';

import { ArtWork, Video } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-intravenus',
  templateUrl: './intravenus.component.html',
  styleUrls: ['./intravenus.component.scss']
})
export class IntravenusComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  intravenus?: ArtWork;

  constructor() { }

  ngOnInit(): void {
    this.intravenus = this.artworks.find( ( {id} ) => id === 'intravenus');
  }

}
