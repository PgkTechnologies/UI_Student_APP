import { loginRequest } from "../api";
import * as actionTypes from "../actions";
import axios from "axios";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { APIStatus } from "./actionTypes";

export const actionLoginRequest = (model) => async (dispatch) => {
  dispatch(APIStatus(true));
  let formData = new FormData();
  formData.append("stakeholder", model.stakeholder);
  formData.append("userID", model.userID);
  formData.append("password", model.password);
  try {
    const res = await axios({
      method: "POST",
      url: BASE_URL + "/o/login",
      data: formData, //'emphone','pass','submit
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "multipart/form-data",
      },
      // body: formdata,
    });
    if (res.data) {
      dispatch({
        type: actionTypes.LOGINREQUEST,
        payload: res.data,
      });
      AsyncStorage.setItem("token", res.data.token);
    }
    dispatch(APIStatus(false));
  } catch (error) {
    console.log(error, "ERR");
    dispatch(APIStatus(false));
  }
};
