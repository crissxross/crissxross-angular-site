import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

// Note: Scully depends an AppRoutingModule
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
// import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes, {
    //   scrollPositionRestoration: 'enabled'
    // }),
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// NOTE:
// APP ARCHITECTURE based on this article:
// https://medium.com/@tomastrajan/how-to-build-epic-angular-app-with-clean-architecture-91640ed1656
// 👆 ARTICLE COPIED TO MY NOTION
