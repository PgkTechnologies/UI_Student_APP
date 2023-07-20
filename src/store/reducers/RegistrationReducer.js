import * as actionTypes from "../actions";

const INITIAL = {
  lutData: [],
  refCode: null,
  regData: null,
};

const RegistrationReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case actionTypes.STUDENTPROGRAMSLUT:
      return { ...state, lutData: action.payload };
    case actionTypes.STUDENTREFCODERESP:
      return { ...state, refCode: action.payload };
    case actionTypes.STUDENTREFCODERESP:
      return { ...state, regData: action.payload };
    default:
      return state;
  }
};

export default RegistrationReducer;
