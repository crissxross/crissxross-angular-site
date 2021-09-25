import { Component, Input, OnInit } from '@angular/core';

import { ArtWork } from '../../models/artwork.model';


@Component({
  selector: 'cx-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss']
})
export class ArtworkCardComponent implements OnInit {
  // because of strict, marked this as optional to avoid errors (i.e. artwork can be undefined)
  // for more info, see https://fluin.io/blog/property-has-no-initializer-and-is-not-definitely-assigned
  @Input() artwork?: ArtWork;
  externalLink = false;

  constructor() { }

  ngOnInit(): void {
    if(this.artwork?.url.startsWith('http')) {
      this.externalLink = true;
    }
  }

}
