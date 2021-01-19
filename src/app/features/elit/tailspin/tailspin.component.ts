import { Component, OnInit } from '@angular/core';

import { ArtWork, Video } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

@Component({
  selector: 'cx-tailspin',
  templateUrl: './tailspin.component.html',
  styleUrls: ['./tailspin.component.scss']
})
export class TailspinComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  tailspin?: ArtWork;
  video?: Video;

  constructor() { }

  ngOnInit(): void {
    this.tailspin = this.artworks.find( ( {id} ) => id === 'tailspin');

    if (this.tailspin && this.tailspin.youtubeVideos) {
      this.video = this.tailspin.youtubeVideos[0]
    }
  }

}
