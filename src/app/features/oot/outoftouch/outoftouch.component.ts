import { Component, OnInit } from '@angular/core';

import { ArtWork, Video } from '../../../models/artwork.model';
import { artworksData } from '../../../shared/artworks-data';

// NOTE: This attempted WORKAROUND (which was like stackblitz demo) does NOT WORK any better than my intended implementation below
// interface YoutubeVideo {
//   id: string;
//   name: string;
// }
//
// const youtubeVideos: YoutubeVideo[] = [
//   {
//     id: 'wG_TzAD0Vp4',
//     name: 'Out of Touch'
//   },
//   {
//     id: 'bzyBwooPzeo',
//     name: 'Out of Sight'
//   },
//   {
//     id: 'UkCXK2foL3c',
//     name: 'Out of Hand'
//   },
// ]


@Component({
  selector: 'cx-outoftouch',
  templateUrl: './outoftouch.component.html',
  styleUrls: ['./outoftouch.component.scss']
})
export class OutoftouchComponent implements OnInit {

  artworks: ArtWork[] = artworksData;
  outoftouch?: ArtWork;
  ioOutoftouch?: ArtWork;
  videos?: Video[];
  selectedVideo?: Video;
  // selectedVideo: YoutubeVideo | undefined = youtubeVideos[0];

  constructor() { }

  ngOnInit(): void {
    // uses destructuring
    this.outoftouch = this.artworks.find( ( {id} ) => id === 'outoftouch');

    this.ioOutoftouch = this.artworks.find( ( {id} ) => id === 'io-outoftouch');

    if (this.outoftouch && this.outoftouch.youtubeVideos) {
      this.videos = this.outoftouch.youtubeVideos;
      this.selectedVideo = this.videos[0];
    }
  }

}
