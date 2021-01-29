import { NgModule } from '@angular/core';

// Note: Scully depends an AppRoutingModule
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
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
