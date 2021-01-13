import { Routes } from '@angular/router';
import { HeightsComponent } from './heights/heights.component';
import { IntravenusComponent } from './intravenus/intravenus.component';
import { MovingpixComponent } from './movingpix.component';
import { SocialdisEaseComponent } from './socialdis-ease/socialdis-ease.component';
import { WedrankComponent } from './wedrank/wedrank.component';

export const routes: Routes = [
  {
    path: '', component: MovingpixComponent
  },
  {
    path: 'intravenus', component: IntravenusComponent
    // redirect
  },
  {
    path: 'wedrank', component: WedrankComponent
    // redirect
  },
  {
    path: 'heights', component: HeightsComponent
    // redirect
  },
  {
    path: 'socialdis-ease', component: SocialdisEaseComponent
    // redirect
  }
];
