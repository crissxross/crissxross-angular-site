import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  id: string;
}


@Component({
  selector: 'cx-cx-trail-story-dialog',
  templateUrl: './cx-trail-story-dialog.component.html',
  styleUrls: ['./cx-trail-story-dialog.component.scss']
})
export class CxTrailStoryDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
