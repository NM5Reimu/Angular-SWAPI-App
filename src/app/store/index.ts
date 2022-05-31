import { ActionReducerMap } from '@ngrx/store';

import { PlanetsReducerState, planetsReducer } from './reducers/planets.reducer'
import {CurrentPlanetReducerState, currentPlanetReducer } from './reducers/currentPlanet.reducer'

export interface AppState {
    planetsState: PlanetsReducerState
    currentPlanetState: CurrentPlanetReducerState
}

export const rootReducer: ActionReducerMap<AppState> = {
    planetsState: planetsReducer,
    currentPlanetState: currentPlanetReducer
}