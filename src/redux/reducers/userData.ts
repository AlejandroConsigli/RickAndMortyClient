import { UserDataState } from "../states/userData";
import { UserDataTypes } from "../types/userData";
import { UserDataActions } from "../interfaces/userData";

const initialState: UserDataState = {
  loading: false,
  data: {
    favorites: [],
    user: { _id: "", username: "" },
  },
};

const userData = (
  state: UserDataState = initialState,
  action: UserDataActions
) => {
  const { type, payload } = action;

  switch (type) {
    case UserDataTypes.USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserDataTypes.USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case UserDataTypes.USER_DATA_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userData;
