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
  },
  {
    path: 'wedrank', component: WedrankComponent
  },
  {
    path: 'heights', component: HeightsComponent
  },
  {
    path: 'socialdis-ease', component: SocialdisEaseComponent
  },
  // redirects
  {
    path: 'We_Drank', redirectTo: 'wedrank'
  },
  {
    path: 'IntraVenus', redirectTo: 'intravenus'
  },
  {
    path: 'Heights', redirectTo: 'heights'
  },
  {
    path: 'SocialDis-Ease', redirectTo: 'socialdis-ease'
  },
];
