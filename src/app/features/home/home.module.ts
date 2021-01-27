import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { routes } from './home.routes';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ShowcaseComponent,
    HeroSectionComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
