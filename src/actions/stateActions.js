import { UPDATE_STATE } from "./types";

export const updateState = values => dispatch => {
  dispatch({ type: UPDATE_STATE, payload: values });
  // console.log(values);
};
