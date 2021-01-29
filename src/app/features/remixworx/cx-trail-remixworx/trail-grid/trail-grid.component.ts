import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { CxTrailStoryDialogComponent } from '../../cx-trail-story-dialog/cx-trail-story-dialog.component';
import { CxTrailVideoDialogComponent } from '../../cx-trail-video-dialog/cx-trail-video-dialog.component';


@Component({
  selector: 'cx-trail-grid',
  templateUrl: './trail-grid.component.html',
  styleUrls: ['./trail-grid.component.scss']
})
export class TrailGridComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openStoryDialog(id: string) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = { id };
    dialogConfig.autoFocus = false;
    dialogConfig.restoreFocus = false;

    this.dialog.open(CxTrailStoryDialogComponent, dialogConfig);
  }

  openVideoDialog(id: string, name: string, details?: string) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = { id, name, details };
    dialogConfig.restoreFocus = false;

    this.dialog.open(CxTrailVideoDialogComponent, dialogConfig);
  }


}
