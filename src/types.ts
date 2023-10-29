export interface SearchResult {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export interface State {
  searchTerm: string;
  results: SearchResult[];
}
