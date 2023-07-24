import * as actionTypes from "../actions";

export const APIStatus = (val) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.APISTATUS, payload: val });
  };
};
