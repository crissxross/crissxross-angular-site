import { Routes } from '@angular/router';
import { RemixworxComponent } from './remixworx.component';
import { UpsidedownChandelierComponent } from './upsidedown-chandelier/upsidedown-chandelier.component';

export const routes: Routes = [
  {
    path: '', component: RemixworxComponent
  },
  {
    path: 'upsidedown-chandelier', component: UpsidedownChandelierComponent
  },
  // redirects
  {
    path: 'Tabacka-6', redirectTo: 'upsidedown-chandelier'
  },

];
