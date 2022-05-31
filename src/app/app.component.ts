import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './store';
import { CurrentPlanetReducerState } from './store/reducers/currentPlanet.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentPlanetState!: CurrentPlanetReducerState;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const planetsState$: Subscription = this.store
      .select('currentPlanetState')
      .subscribe((data) => (this.currentPlanetState = data));
  }
}
