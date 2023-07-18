import axios from "axios";
import * as actionTypes from "../actions";
import { BASE_URL } from "@env";

export const GetRegistrationLut = () => async (dispatch) => {
  console.log("2222");
  try {
    const res = await axios({
      method: "GET",
      url:
        BASE_URL +
        "/lut/?lutList=stuProgramCatalog&lutList=stuBranchCatalog&lutList=universityCatalog&lutList=programType&lutList=registeredColleges",
      //data: formData, //'emphone','pass','submit
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "multipart/form-data",
      },
      // body: formdata,
    });
    if (res.data) {
      dispatch({
        type: actionTypes.STUDENTPROGRAMSLUT,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "ERR");
  }
};
