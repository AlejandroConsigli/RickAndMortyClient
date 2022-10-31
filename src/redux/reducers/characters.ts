import { CharactersState } from "../states/characters";
import { CharactersTypes } from "../types/characters";
import { CharactersActions } from "../interfaces/characters";

const initialState: CharactersState = {
  loading: false,
  allCharacters: {
    info: {
      pages: 0,
    },
    results: [],
  },
  singleCharacter: {
    id: 0,
    name: "",
    gender: "",
    type: "",
    status: "",
    image: "",
    species: "",
    location: {
      name: "",
    },
    origin: { name: "" },
    episode: []
  },
  multipleCharacters: [],
};

const characters = (
  state: CharactersState = initialState,
  action: CharactersActions
) => {
  const { type, payload } = action;

  switch (type) {
    case CharactersTypes.CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CharactersTypes.ALL_CHARACTERS_SUCCESS:
      return {
        ...state,
        allCharacters: payload,
        loading: false,
      };
    case CharactersTypes.SINGLE_CHARACTER_SUCCESS:
      return {
        ...state,
        singleCharacter: payload,
        loading: false,
      };
    case CharactersTypes.MULTIPLE_CHARACTERS_SUCCESS:
      return {
        ...state,
        multipleCharacters: payload,
        loading: false,
      };
    case CharactersTypes.CHARACTERS_FAIL:
      return {
        ...state,
        allCharacters: {
          info: {
            pages: 0,
          },
          results: [],
        },
        singleCharacter: {
          id: 0,
          name: "",
          gender: "",
          type: "",
          status: "",
          image: "",
          species: "",
          location: {
            name: "",
          },
          origin: { name: "" },
          episode: []
        },
        multipleCharacters: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default characters;
