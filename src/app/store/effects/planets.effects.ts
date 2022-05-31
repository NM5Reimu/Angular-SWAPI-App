import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap, catchError, forkJoin, concatMap, of } from 'rxjs';
import { SwapiService } from '../../services/swapi.service';
import { LOAD_ALL_PLANETS_FAILURE, LOAD_ALL_PLANETS_REQUEST, LOAD_ALL_PLANETS_SUCCESS } from '../actions/planets.actions';
import { LOAD_PLANET_REQUEST, LOAD_PLANET_SUCCESS, LOAD_PLANET_FAILURE } from '../actions/viewPlanet.actions';
import { Planet, Planets, FullInfoOfPlanet, Resident } from '../models/swapi.models';

@Injectable()
export class PlanetsEffects {
  constructor(private actions$: Actions, private swapiService: SwapiService) {}

  loadAllPlanets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_ALL_PLANETS_REQUEST),
      mergeMap(() =>
        this.swapiService.loadAllPlanets().pipe(
          map((planets: Planets) => LOAD_ALL_PLANETS_SUCCESS({ planets })),
          catchError((error) => of(LOAD_ALL_PLANETS_FAILURE({ error })))
        )
      )
    )
  );

  loadPlanet$ = createEffect(() =>
    this.actions$.pipe(
      //* Отлавливаем момент запроса к API для загрузки конкретной планеты
      ofType(LOAD_PLANET_REQUEST),

      //* Загружаем планету --> получаю Observable<Planet> --> передаю по цепочке в mergeMap
      concatMap((action) => this.swapiService.loadPlanet(action.url)),

      //* Если на планете есть жители, то
      //* с помощью forkJoin прохожусь по массиву residents и загружаю данные по каждому жителю.
      //* Затем создаю новый объект планеты, который будет содержать полные данные о жителях вместо ссылок на API.
      //* Если жителей нет, то создаю объект с пустым массивом.
      mergeMap((planet: Planet) => {
        if (planet.residents.length === 0) {
          return of(this.createFullPlanetObjectByPlanetObjectAndResidentsArray(planet, []));
        } else {
          return forkJoin(
            planet.residents.map((residentURL) =>
              this.swapiService.loadResident(residentURL)
            )
          ).pipe(
            map((residents) =>
              this.createFullPlanetObjectByPlanetObjectAndResidentsArray(planet, residents)
            )
          );
        }
      }),
      //* Объект планеты передается в экшн.
      //* Ура, теперь у нас есть полные данные о планете и не нужно подгружать их отдельно.
      //? Выглядит очень страшно, знаю.
      map((planet: FullInfoOfPlanet) => LOAD_PLANET_SUCCESS({ planet })),
      catchError((error) => of(LOAD_PLANET_FAILURE({ error })))
    )
  );

  createFullPlanetObjectByPlanetObjectAndResidentsArray(planet: Planet, residents: Resident[]): FullInfoOfPlanet {
    return new FullInfoOfPlanet(
      planet.name,
      planet.rotation_period,
      planet.orbital_period,
      planet.diameter,
      planet.climate,
      planet.gravity,
      planet.terrain,
      planet.surface_water,
      planet.population,
      residents,
      planet.films,
      planet.created,
      planet.edited,
      planet.url
    );
  }
}
