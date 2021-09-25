import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
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
    path: 'movingpix',
    loadChildren: () => import('./features/movingpix/movingpix.module').then(m => m.MovingpixModule)
  },
  {
    path: 'MovingPix', redirectTo: 'movingpix'
  },
  {
    path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
