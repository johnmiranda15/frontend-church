import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NowUsComponent } from './components/nowus/nowus.component';
import { CreedComponent } from './components/creed/creed.component';
import { StartComponent } from './components/start/start.component';
import { ErrorComponent } from './components/error/error.component';
import { VisitUsComponent } from './components/visitus/visitus.component';
import { SermonsComponent } from './components/sermons/sermons.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NowUsComponent,
    CreedComponent,
    StartComponent,
    ErrorComponent,
    VisitUsComponent,
    SermonsComponent,
    FooterComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
