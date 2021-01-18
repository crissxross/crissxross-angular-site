import { Component, OnInit } from '@angular/core';

import { ArtWork, Video } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-rememori',
  templateUrl: './rememori.component.html',
  styleUrls: ['./rememori.component.scss']
})
export class RememoriComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  rememori?: ArtWork;

  constructor() { }

  ngOnInit(): void {
    this.rememori = this.artworks.find( ( {id} ) => id === 'rememori');
  }

}
