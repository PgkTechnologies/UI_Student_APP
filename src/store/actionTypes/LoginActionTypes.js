import { loginRequest } from "../api";
import * as actionTypes from "../actions";
import axios from "axios";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const actionLoginRequest = (model) => async (dispatch) => {
  let formData = new FormData();
  formData.append("stakeholder", model.stakeholder);
  formData.append("userID", model.userID);
  formData.append("password", model.password);
  try {
    const res = await axios({
      method: "POST",
      url: "https://devapi.c2hire.com/api/o/login",
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
      await AsyncStorage.setItem("token", res.data.token);
      console.log(res.data, "RESP");
    }
  } catch (error) {
    console.log(error, "ERR");
  }
};
