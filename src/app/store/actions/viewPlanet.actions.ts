import { createAction, props } from '@ngrx/store';
import { FullInfoOfPlanet } from '../models/swapi.models'

export const LOAD_PLANET_REQUEST = createAction('[App] Load Planet Request', props<{ url: string}>());
export const LOAD_PLANET_FAILURE = createAction('[App] Load Planet Failure', props<{ error: string}>());
export const LOAD_PLANET_SUCCESS = createAction('[App] Load Planet Success', props<{ planet: FullInfoOfPlanet}>());
export const CLEAN_CURRENT_PLANET = createAction('[App] Clean Current Planet');