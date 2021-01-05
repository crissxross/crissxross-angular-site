import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ArtworkCardComponent } from './artwork-card/artwork-card.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ArtworkCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    CommonModule, // ngIf, ngFor
    RouterModule, // routerLink, <router-outlet>
    // material
    MatButtonModule,
    MatIconModule,

    // components
    ArtworkCardComponent,
  ]
})
export class SharedModule { }
