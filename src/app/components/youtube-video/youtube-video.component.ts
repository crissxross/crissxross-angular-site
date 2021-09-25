import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'cx-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent implements OnInit, AfterViewInit, OnDestroy {

  // @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLDivElement>;
  @ViewChild('videoPlayer') private _videoPlayer?: ElementRef;
  private get videoPlayer(): HTMLDivElement {
    return this._videoPlayer?.nativeElement
  }

  apiLoaded = false;
  @Input() videoId: string | undefined = '';
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);

  }

  onResize = (): void => {
      // Automatically expand the video to fit the page up to 1200px x 720px
      this.videoWidth = Math.min(this.videoPlayer.clientWidth, 1200);
      // 16:9 aspect ratio
      this.videoHeight = this.videoWidth * 0.5625;
      this._changeDetectorRef.detectChanges();
    }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

}
