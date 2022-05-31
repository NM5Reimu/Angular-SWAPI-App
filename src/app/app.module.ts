import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { ViewPlanetComponent } from './view-planet/view-planet.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PlanetsEffects } from './store/effects/planets.effects';
import { rootReducer } from './store';
import { SwapiService } from './services/swapi.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    ViewPlanetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([PlanetsEffects]),
    StoreDevtoolsModule.instrument({ name: 'Angular SWAPI' })
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
