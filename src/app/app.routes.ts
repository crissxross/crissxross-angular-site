import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'elit',
    loadChildren: () => import('./features/elit/elit.module').then(m => m.ElitModule)
  },
  {
    path: 'oot',
    loadChildren: () => import('./features/oot/oot.module').then(m => m.OotModule)
  },
  {
    path: 'remixworx',
    loadChildren: () => import('./features/remixworx/remixworx.module').then(m => m.RemixworxModule)
  },
  {
    path: 'MovingPix',
    redirectTo: 'movingpix'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
