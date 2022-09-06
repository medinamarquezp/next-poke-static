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

export interface ListItems {
  id: number;
  name: string;
}
