declare global {

  type MenuActive = "all" | "unknown" | "genderless" | "female" | "male";

  interface Info {
    count: number;
    next: string;
    pages: number;
    prev: string;
  }

  interface Location {
    name: string;
    url: string;
  }

  interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    location: Location;
    episode: string[];
    created: string;
    episodesFetched: Episode[];
  }

  interface Episode {
    air_date: string;
    characters: string[];
    created: string;
    episode: string;
    id: number;
    name: string;
    url: string;
  }

  interface Info {
    count: number
    next: string
    pages: number
    prev: string
  }
}

export {}
