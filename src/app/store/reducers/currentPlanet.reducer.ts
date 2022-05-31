import { createReducer, on } from '@ngrx/store';
import { LOAD_PLANET_FAILURE, LOAD_PLANET_SUCCESS, CLEAN_CURRENT_PLANET } from '../actions/viewPlanet.actions';
import { FullInfoOfPlanet } from '../models/swapi.models';

export interface CurrentPlanetReducerState {
	currentPlanet?: FullInfoOfPlanet
}

const initialState: CurrentPlanetReducerState = {
}

export const currentPlanetReducer = createReducer(
	initialState,
	on(LOAD_PLANET_SUCCESS, (state: any, { planet }) => ({...state, currentPlanet: planet})),
	on(CLEAN_CURRENT_PLANET, (state: any) => ({...state, currentPlanet: undefined}))
)