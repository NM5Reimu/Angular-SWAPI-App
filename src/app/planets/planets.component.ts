import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../store';
import { LOAD_ALL_PLANETS_REQUEST } from '../store/actions/planets.actions';
import { LOAD_PLANET_REQUEST } from '../store/actions/viewPlanet.actions';
import { PlanetsReducerState } from '../store/reducers/planets.reducer';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent implements OnInit {
  planetsState!: PlanetsReducerState;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.fetchData();
    this.store.dispatch(LOAD_ALL_PLANETS_REQUEST());
  }

  fetchData(): void {
    const planetsState$: Subscription = this.store
      .select('planetsState')
      .subscribe((data) => (this.planetsState = data));
  }

  viewPlanet(url: string): void {
    this.store.dispatch(LOAD_PLANET_REQUEST({ url }));
  }
}
