import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { Subscription } from 'rxjs';
import { PlanetsReducerState } from '../store/reducers/planets.reducer';
import { Resident } from '../store/models/swapi.models';
import { CLEAN_CURRENT_PLANET } from '../store/actions/viewPlanet.actions';
import { CurrentPlanetReducerState } from '../store/reducers/currentPlanet.reducer';

@Component({
  selector: 'app-view-planet',
  templateUrl: './view-planet.component.html',
  styleUrls: ['./view-planet.component.scss']
})
export class ViewPlanetComponent implements OnInit {

  currentPlanetsState!: CurrentPlanetReducerState;
  genderFilter: string = 'all'; //all, male, female, others

  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(): void {
    const planetsState$: Subscription = this.store.select('currentPlanetState').subscribe(data => this.currentPlanetsState = data)
  }

  changeResidentsFilter(gender: string): void {
    this.genderFilter = gender;
  }

  filterResidents(residents: Resident[]): Resident[] {
    switch(this.genderFilter){
      case 'all':
        return residents;
      case 'male': 
        return residents.filter(resident => resident.gender === 'male');
      case 'female': 
        return residents.filter(resident => resident.gender === 'female');
      case 'others':
        return residents.filter(resident => resident.gender === 'n/a');
      default:
        return residents;
    }
  }

  backToPlanets(): void {
    this.store.dispatch(CLEAN_CURRENT_PLANET());
  }

}
