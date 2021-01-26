import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  id: string;
}


@Component({
  selector: 'cx-cx-trail-story-dialog',
  templateUrl: './cx-trail-story-dialog.component.html',
  styleUrls: ['./cx-trail-story-dialog.component.scss']
})
export class CxTrailStoryDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CxTrailStoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.dialogRef.addPanelClass('crissxross-light-theme');
  }

}
