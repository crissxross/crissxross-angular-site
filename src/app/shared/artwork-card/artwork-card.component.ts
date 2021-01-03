import { Component, Input, OnInit } from '@angular/core';

import { ArtWork } from '../../models/artwork.model';


@Component({
  selector: 'cx-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss']
})
export class ArtworkCardComponent implements OnInit {

  // because of strict, marked this as optional to avoid errors
  @Input() artwork?: ArtWork;

  constructor() { }

  ngOnInit(): void {
  }

}
