export interface CharactersState {
  loading: boolean;
  allCharacters: allCharacters;
  singleCharacter: character;
  multipleCharacters: character[] | character;
}

export interface character {
  id: number;
  name: string;
  gender: string;
  type: string;
  status: string;
  image: string;
  species: string;
  location: {
    name: string;
  };
  origin: { name: string };
  episode: string[]
}

export interface allCharacters {
  info: {
    pages: number;
  };
  results: character[];
}
