import { createAction, props } from '@ngrx/store';
import { Planets } from '../models/swapi.models'

export const LOAD_ALL_PLANETS_REQUEST = createAction('[App] Load All Planets Request');
export const LOAD_ALL_PLANETS_FAILURE = createAction('[App] Load All Planets Failure', props<{ error: string}>());
export const LOAD_ALL_PLANETS_SUCCESS = createAction('[App] Load All Planets Success', props<{ planets: Planets}>());