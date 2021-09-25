import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

import { ArtworkCardComponent } from './artwork-card/artwork-card.component';
import { AccoladesListComponent } from './accolades-list/accolades-list.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';



@NgModule({
  declarations: [
    ArtworkCardComponent,
    AccoladesListComponent,
    UnderConstructionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    // material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
  ],
  exports: [
    CommonModule, // ngIf, ngFor
    RouterModule, // routerLink, <router-outlet>
    FormsModule,
    // material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,

    // components
    ArtworkCardComponent,
    AccoladesListComponent,
    UnderConstructionComponent,
  ]
})
export class SharedModule { }
