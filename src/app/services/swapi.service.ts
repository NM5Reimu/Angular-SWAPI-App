import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film, Planet, Planets, Resident, Starship, Vehicle } from '../store/models/swapi.models'

@Injectable()
export class SwapiService {

  constructor(private http: HttpClient) { }

  loadAllPlanets() {
    return this.http.get<Planets>('https://swapi.dev/api/planets')
  }

  loadPlanet(url: string) {
    return this.http.get<Planet>(url)
  }

  loadResident(url: string) {
    return this.http.get<Resident>(url)
  }

  loadVehicle(url: string) {
    return this.http.get<Vehicle>(url)
  }

  loadStarship(url: string) {
    return this.http.get<Starship>(url)
  }

  loadFilm(url: string) {
    return this.http.get<Film>(url)
  }
}