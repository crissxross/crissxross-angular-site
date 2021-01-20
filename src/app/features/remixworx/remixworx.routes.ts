import { Routes } from '@angular/router';
import { CxTrailRemixworxComponent } from './cx-trail-remixworx/cx-trail-remixworx.component';
import { RemixworxComponent } from './remixworx.component';
import { UpsidedownChandelierComponent } from './upsidedown-chandelier/upsidedown-chandelier.component';

export const routes: Routes = [
  {
    path: '', component: RemixworxComponent
  },
  {
    path: 'upsidedown-chandelier', component: UpsidedownChandelierComponent
  },
  {
    path: 'cx-trail-remix', component: CxTrailRemixworxComponent
  },
  // redirects
  {
    path: 'Tabacka-6', redirectTo: 'upsidedown-chandelier'
  },

];
