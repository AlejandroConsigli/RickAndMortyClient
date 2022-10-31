import { AxiosError } from "axios";
import { openAlert } from "../../redux/actions/alerts";
import { TypedDispatch } from "../../redux/store";

interface responseData {
  errors: [{ msg: string }];
}

export const alertErrors = (dispatch: TypedDispatch, error: unknown) => {
  const { response } = error as AxiosError;
  if (response && response.status !== 500 && response.data) {
    const responseData = response.data as responseData;
    dispatch(openAlert("error", responseData.errors[0].msg));
  } else {
    dispatch(openAlert("error", "Serer error"));
  }
};
