import { Component, OnInit } from '@angular/core';

import { ArtWork, Video } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-heights',
  templateUrl: './heights.component.html',
  styleUrls: ['./heights.component.scss']
})
export class HeightsComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  heights?: ArtWork;
  video?: Video;

  constructor() { }

  ngOnInit(): void {
    this.heights = this.artworks.find( ( {id} ) => id === 'heights');

    if (this.heights && this.heights.youtubeVideos) {
      this.video = this.heights.youtubeVideos[0]
    }
  }

}
