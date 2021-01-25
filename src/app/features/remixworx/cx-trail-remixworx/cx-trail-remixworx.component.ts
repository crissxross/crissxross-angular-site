import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { CxTrailStoryDialogComponent } from '../cx-trail-story-dialog/cx-trail-story-dialog.component';

@Component({
  selector: 'cx-cx-trail-remixworx',
  templateUrl: './cx-trail-remixworx.component.html',
  styleUrls: ['./cx-trail-remixworx.component.scss']
})
export class CxTrailRemixworxComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openStoryDialog(id: string) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = { id };

    this.dialog.open(CxTrailStoryDialogComponent, dialogConfig);

  }

}
