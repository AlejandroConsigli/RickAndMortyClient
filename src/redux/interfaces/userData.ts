import { data } from "../states/userData";
import { UserDataTypes } from "../types/userData";

interface UserDataRequestAction {
  type: UserDataTypes.USER_DATA_REQUEST;
  payload: {};
}

interface UserDataSuccesAction {
  type: UserDataTypes.USER_DATA_SUCCESS;
  payload: data;
}

interface UserDataFailAction {
  type: UserDataTypes.USER_DATA_FAIL;
  payload: {};
}

export type UserDataActions =
  | UserDataRequestAction
  | UserDataSuccesAction
  | UserDataFailAction;
