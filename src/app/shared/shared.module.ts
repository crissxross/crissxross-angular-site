import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ArtworkCardComponent } from './artwork-card/artwork-card.component';



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
    MatCardModule,
    MatIconModule,

    // components
    ArtworkCardComponent,
  ]
})
export class SharedModule { }
