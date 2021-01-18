import { Component, OnInit } from '@angular/core';

import { ArtWork, Video } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-upsidedown-chandelier',
  templateUrl: './upsidedown-chandelier.component.html',
  styleUrls: ['./upsidedown-chandelier.component.scss']
})
export class UpsidedownChandelierComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  upsidedownChandelier?: ArtWork;

  constructor() { }

  ngOnInit(): void {
    this.upsidedownChandelier = this.artworks.find( ( {id} ) => id === 'upsidedown-chandelier');
  }

}
