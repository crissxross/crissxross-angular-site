import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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

  constructor(
    private diaglogRef: MatDialogRef<CxTrailVideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.diaglogRef.addPanelClass('cx-bg-black-dialog');
  }

}
