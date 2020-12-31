import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { routes } from './home.routes';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
