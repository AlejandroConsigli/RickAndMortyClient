import { allCharacters, character } from "../states/characters";
import { CharactersTypes } from "../types/characters";

interface CharactersRequestAction {
  type: CharactersTypes.CHARACTERS_REQUEST;
  payload: {};
}

interface CharactersSuccessAction {
  type: CharactersTypes.ALL_CHARACTERS_SUCCESS;
  payload: allCharacters;
}

interface CharacterSingleSuccessAction {
  type: CharactersTypes.SINGLE_CHARACTER_SUCCESS;
  payload: character;
}

interface CharactersMultipleSuccessAction {
  type: CharactersTypes.MULTIPLE_CHARACTERS_SUCCESS;
  payload: character[] | character;
}

interface CharactersFailAction {
  type: CharactersTypes.CHARACTERS_FAIL;
  payload: {};
}

export type CharactersActions =
  | CharactersRequestAction
  | CharactersSuccessAction
  | CharacterSingleSuccessAction
  | CharactersMultipleSuccessAction
  | CharactersFailAction;
