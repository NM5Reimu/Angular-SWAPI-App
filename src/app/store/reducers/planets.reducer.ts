import { createReducer, on } from '@ngrx/store';
import { LOAD_ALL_PLANETS_SUCCESS } from '../actions/planets.actions';
import { LOAD_PLANET_FAILURE, LOAD_PLANET_SUCCESS, CLEAN_CURRENT_PLANET } from '../actions/viewPlanet.actions';
import { Planets, Planet, FullInfoOfPlanet } from '../models/swapi.models';

export interface PlanetsReducerState {
	allPlanets?: Planets
}

const initialState: PlanetsReducerState = {
}

export const planetsReducer = createReducer(
	initialState,
	on(LOAD_ALL_PLANETS_SUCCESS, (state: any, { planets }) => ({...state, allPlanets: planets}))
)