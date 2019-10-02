import { UPDATE_STATE } from "../actions/types";

let initialState = {
  values: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      // console.log(action.payload);
      // console.log(state.values);
      return {
        ...state,
        values: action.payload
      };
    default:
      return { ...state };
  }
};
