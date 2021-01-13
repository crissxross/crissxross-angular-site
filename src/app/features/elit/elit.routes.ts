import { Routes } from '@angular/router';
import { ElitComponent } from './elit.component';
import { FittingThePatternComponent } from './fitting-the-pattern/fitting-the-pattern.component';
import { RememoriComponent } from './rememori/rememori.component';
import { TailspinComponent } from './tailspin/tailspin.component';
import { UnderbellyComponent } from './underbelly/underbelly.component';
import { UpsidedownChandelierComponent } from './upsidedown-chandelier/upsidedown-chandelier.component';

export const routes: Routes = [
  {
    path: '', component: ElitComponent
  },
  {
    path: 'underbelly', component: UnderbellyComponent
  },
  {
    path: 'fitting-the-pattern', component: FittingThePatternComponent
    // redirect
  },
  {
    path: 'tailspin', component: TailspinComponent
  },
  {
    path: 'rememori', component: RememoriComponent
  },
  {
    path: 'upsidedown-chandelier', component: UpsidedownChandelierComponent
    // redirect
  },
];
