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
  isLoading: boolean;
  searchTerm: string;
  results: SearchResult[];
}

export interface SearchInputProps {
  searchTerm: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchButtonProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ResultsProps {
  results: SearchResult[];
}
