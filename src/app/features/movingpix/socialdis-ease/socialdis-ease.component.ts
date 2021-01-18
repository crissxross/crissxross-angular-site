import { Component, OnInit } from '@angular/core';

import { ArtWork, Video } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-socialdis-ease',
  templateUrl: './socialdis-ease.component.html',
  styleUrls: ['./socialdis-ease.component.scss']
})
export class SocialdisEaseComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  socialdisEase?: ArtWork;

  constructor() { }

  ngOnInit(): void {
    this.socialdisEase = this.artworks.find( ( {id} ) => id === 'socialdis-ease');
  }

}
