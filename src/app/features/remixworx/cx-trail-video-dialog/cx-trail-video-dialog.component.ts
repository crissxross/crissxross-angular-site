import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Video } from '../../../models/artwork.model';

export interface DialogData {
  id: string;
  name: string;
  details?: string;
}


@Component({
  selector: 'cx-cx-trail-video-dialog',
  templateUrl: './cx-trail-video-dialog.component.html',
  styleUrls: ['./cx-trail-video-dialog.component.scss']
})
export class CxTrailVideoDialogComponent implements OnInit {

  video?: Video;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
