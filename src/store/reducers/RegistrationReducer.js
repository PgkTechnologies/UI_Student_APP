import * as actionTypes from "../actions";

const INITIAL = {
  lutData: [],
};

const RegistrationReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case actionTypes.STUDENTPROGRAMSLUT:
      return { ...state, lutData: action.payload };
    default:
      return state;
  }
};

export default RegistrationReducer;
