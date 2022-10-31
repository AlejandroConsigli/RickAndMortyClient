import { user } from "../states/user";
import { UserTypes } from "../types/user";

interface UserRequestAction {
  type: UserTypes.USER_REQUEST;
  payload: {};
}

interface UserSuccesAction {
  type: UserTypes.USER_SUCCESS;
  payload: user;
}

interface UserFailAction {
  type: UserTypes.USER_FAIL;
  payload: {};
}

export type UserActions = UserRequestAction | UserSuccesAction | UserFailAction;
