import { Component, Input, OnInit } from '@angular/core';

import { ArtWork } from '../../models/artwork.model';

@Component({
  selector: 'cx-accolades-list',
  templateUrl: './accolades-list.component.html',
  styleUrls: ['./accolades-list.component.scss']
})
export class AccoladesListComponent implements OnInit {

  @Input() artwork?: ArtWork

  constructor() { }

  ngOnInit(): void {
  }

}
