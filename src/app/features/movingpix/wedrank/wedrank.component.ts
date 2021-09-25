import { Component, OnInit } from '@angular/core';

import { ArtWork, Video } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-wedrank',
  templateUrl: './wedrank.component.html',
  styleUrls: ['./wedrank.component.scss']
})
export class WedrankComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  wedrank?: ArtWork;
  video?: Video;

  constructor() { }

  ngOnInit(): void {
    this.wedrank = this.artworks.find( ( {id} ) => id === 'wedrank');

    if (this.wedrank && this.wedrank.youtubeVideos) {
      this.video = this.wedrank.youtubeVideos[0]
    }
  }

}
