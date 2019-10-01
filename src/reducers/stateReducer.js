import { UPDATE_STATE } from "../actions/types";

const initialState = {
  // values: [
  age: 0,
  basic_salary: 0,
  epf: 0,
  health_ins: 0,
  home_interest: 0,
  home_premium: 0,
  hra: 0,
  life_ins: 0,
  ppf: 0,
  tuition_fee: 0
  // ]
};

console.log(initialState);

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      console.log(action.payload);
      return {
        ...state,
        values: action.payload
      };
    default:
      return { ...state };
  }
};
