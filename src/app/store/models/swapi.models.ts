export class Planets {
  constructor(
    public count: number,
    public next: string,
    public previous: null,
    public results: Planet[]
  ) {}
}

export class FullInfoOfPlanet {
  constructor(
    public name: string,
    public rotation_period: string,
    public orbital_period: string,
    public diameter: string,
    public climate: string,
    public gravity: string,
    public terrain: string,
    public surface_water: string,
    public population: string,
    public residents: Resident[],
    public films: string[],
    public created: string,
    public edited: string,
    public url: string
  ) {}
}

export class FullInfoOfResident {
  constructor(
    public name: string,
    public height: string,
    public mass: string,
    public hair_color: string,
    public skin_color: string,
    public eye_color: string,
    public birth_year: string,
    public gender: string,
    public homeworld: string,
    public films: Film[],
    public species: string[],
    public vehicles: Vehicle[],
    public starships: Starship[],
    public created: string,
    public edited: string,
    public url: string
  ) {}
}

export class Planet {
  constructor(
    public name: string,
    public rotation_period: string,
    public orbital_period: string,
    public diameter: string,
    public climate: string,
    public gravity: string,
    public terrain: string,
    public surface_water: string,
    public population: string,
    public residents: string[],
    public films: string[],
    public created: string,
    public edited: string,
    public url: string
  ) {}
}

export class Resident {
  constructor(
    public name: string,
    public height: string,
    public mass: string,
    public hair_color: string,
    public skin_color: string,
    public eye_color: string,
    public birth_year: string,
    public gender: string,
    public homeworld: string,
    public films: string[],
    public species: string[],
    public vehicles: string[],
    public starships: string[],
    public created: string,
    public edited: string,
    public url: string
  ) {}
}

export class Vehicle {
  constructor(
    public name: string,
    public model: string,
    public manufacturer: string,
    public cost_in_credits: string,
    public length: string,
    public max_atmosphering_speed: string,
    public crew: string,
    public passengers: string,
    public cargo_capacity: string,
    public consumables: string[],
    public vehicle_class: string,
    public pilots: string[],
    public films: string[],
    public created: string,
    public edited: string,
    public url: string
  ) {}
}

export class Starship {
  constructor(
    public name: string,
    public model: string,
    public manufacturer: string,
    public cost_in_credits: string,
    public length: string,
    public max_atmosphering_speed: string,
    public crew: string,
    public passengers: string,
    public cargo_capacity: string,
    public consumables: string,
    public hyperdrive_rating: string,
    public MGLT: string,
    public starship_class: string,
    public pilots: string[],
    public films: string[],
    public created: string,
    public edited: string,
    public url: string
  ) {}
}

export class Film {
  constructor(
    public title: string,
    public episode_id: string,
    public opening_crawl: string,
    public director: string,
    public producer: string,
    public release_date: string,
    public characters: string[],
    public planets: string[],
    public starships: string[],
    public filmvehicless: string[],
    public species: string[],
    public created: string,
    public edited: string,
    public url: string
  ) {}
}
