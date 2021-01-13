import { Routes } from '@angular/router';
import { OotComponent } from './oot.component';
import { OutoftouchComponent } from './outoftouch/outoftouch.component';

export const routes: Routes = [
  {
    path: '', component: OotComponent
  },
  {
    path: 'outoftouch', component: OutoftouchComponent
  }
];
