import * as actionTypes from "../actions";

const INITIAL = {
  lutData: [],
  refCode: null,
  regData: null,
  otpVerified: null,
  regFee: null,
};

const RegistrationReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case actionTypes.STUDENTPROGRAMSLUT:
      return { ...state, lutData: action.payload };
    case actionTypes.STUDENTREFCODERESP:
      return { ...state, refCode: action.payload };
    case actionTypes.STUDENTREGDATAPOSTSUCCESS:
      return { ...state, regSuccessData: action.payload };
    case actionTypes.OTPVERIFIEDDATA:
      return { ...state, otpVerified: action.payload };
    case actionTypes.FINAL_REG_FEE_AMOUNT:
      return { ...state, regFee: action.payload };
    default:
      return state;
  }
};

export default RegistrationReducer;
