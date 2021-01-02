import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArtworkCardComponent } from './artwork-card/artwork-card.component';



@NgModule({
  declarations: [
    ArtworkCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // material...?
  ],
  exports: [
    CommonModule, // ngIf, ngFor
    RouterModule, // routerLink, <router-outlet>
    // material...?

    // components
    ArtworkCardComponent
  ]
})
export class SharedModule { }
