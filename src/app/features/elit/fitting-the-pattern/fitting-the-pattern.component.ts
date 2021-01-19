import { Component, OnInit } from '@angular/core';

import { ArtWork, Video } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-fitting-the-pattern',
  templateUrl: './fitting-the-pattern.component.html',
  styleUrls: ['./fitting-the-pattern.component.scss']
})
export class FittingThePatternComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  fittingThePattern?: ArtWork;
  video?: Video;

  constructor() { }

  ngOnInit(): void {
    this.fittingThePattern = this.artworks.find( ( {id} ) => id === 'fitting-the-pattern');

    if (this.fittingThePattern && this.fittingThePattern.youtubeVideos) {
      this.video = this.fittingThePattern.youtubeVideos[0]
    }

  }

}
