import * as actionTypes from "../actions";

const INITIAL = {
  apiStatus: false,
  apiSuccess: false,
  apiError: false,
  token: null,
};

const LoginReducer = (state = INITIAL, action) => {
  console.log(action, "Redu");
  switch (action.type) {
    case actionTypes.APISTATUS:
      return { ...state, apiStatus: action.payload };
    case actionTypes.SUCCESS:
      return { ...state, apiSuccess: action.payload };
    case actionTypes.ERROR:
      return { ...state, apiError: action.payload };
    case actionTypes.LOGINREQUEST:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default LoginReducer;
