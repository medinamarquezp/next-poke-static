export interface PokeList {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface PokeApiListItems {
  id: number;
  name: string;
}
