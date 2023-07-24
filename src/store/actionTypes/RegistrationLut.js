import axios from "axios";
import * as actionTypes from "../actions";
import { BASE_URL } from "@env";
import instance from "../../utils/Axios";
const FormData = global.FormData;
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetRegistrationLut = () => async (dispatch) => {
  try {
    const resp = await axios({
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
    if (resp.data) {
      dispatch({
        type: actionTypes.STUDENTPROGRAMSLUT,
        payload: resp.data,
      });
    }
  } catch (error) {
    console.log(error, "ERR");
  }
};

export const ValidateReferalCode = (action) => async (dispatch) => {
  console.log(action, "CODE");
  try {
    const resp = await axios({
      method: "GET",
      url: BASE_URL + `/o/validateRefCode/${action.code}`,
      //data: formData, //'emphone','pass','submit
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "multipart/form-data",
      },
      // body: formdata,
    });
    if (resp.data) {
      console.log(resp.data, "REFCODE");
      dispatch({
        type: actionTypes.STUDENTREFCODERESP,
        payload: resp.data,
      });
      action.callback(resp.data);
    }
  } catch (error) {
    console.log(error, "ERR");
  }
};

export const StudentRegistrationDataPost = (action) => async (dispatch) => {
  const model = action.apiPayloadRequest;
  console.log(model, "DATA");
  const URL = "/o/signUp/Student";
  let formData = new FormData();
  // formData.append("firstName", model.firstName);
  // formData.append("middleName", model.middleName);
  // formData.append("lastName", model.lastName);
  // formData.append("personalEmail", model.personalEmail);
  // formData.append("phoneNumber", model.phoneNumber);
  // formData.append("aadharNumber", model.aadharNumber);
  // formData.append("password", model.password);
  // formData.append("universityName", model.universityName);
  // formData.append("collegeID", model.collegeID);
  // formData.append("universityID", model.universityID);
  // formData.append("collegeName", model.collegeName);
  // formData.append("programName", model.programName);
  // formData.append("programID", model.programID);
  // formData.append("branchName", model.branchName);
  // formData.append("branchID", model.branchID);
  // formData.append("referredCode", model.referredCode);
  // formData.append("highestQualification", model.highestQualification);
  // formData.append("attribute6", true);
  // formData.append("dateOfBirth", model.dateOfBirth);

  for (const key in model) {
    formData.append(key, model[key]);
  }
  console.log(formData, "API");
  try {
    const resp = await axios({
      method: "POST",
      url: BASE_URL + `/o/signUp/Student`,
      data: formData, //'emphone','pass','submit
      headers: {
        Accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
      },
    });
    if (resp.data) {
      console.log(resp.data, "RESPONSE");
      dispatch({
        type: actionTypes.STUDENTREGDATAPOSTSUCCESS,
        payload: resp.data,
      });
      action.callback(resp.data);
    }
  } catch (err) {
    if (err.response) {
      console.log(err.response.data.errors[0].message);
    } else {
      console.log("Something Wrong!", err.message);
    }
  }
};

export const SendMobileOTP = (action) => async (dispatch) => {
  const model = action.apiPayloadRequest;
  const URL = "/o/verifyOTP";
  let formData = new FormData();
  for (const key in model) {
    formData.append(key, model[key]);
  }
  try {
    const res = await axios({
      method: "POST",
      url: BASE_URL + URL,
      data: formData, //'emphone','pass','submit
      headers: {
        Accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
      },
    });
    const resp = res.data;
    if (resp.MobileVerified) {
      await AsyncStorage.setItem("tokenreg", resp.token);
      dispatch({
        type: actionTypes.OTPVERIFIEDDATA,
        payload: resp.data,
      });
      action.callback(resp);
    } else {
      if (!resp.MobileVerified) {
        console.log("Worng OTP Try again");
      }
    }
  } catch (err) {
    if (err.response) {
      console.log(err.response.data.errors[0].message);
    } else {
      console.log("Something Wrong!", err.message);
    }
  }
};

export const GetRegistrationAmount = () => async (dispatch) => {
  const URL = "/pg/regFee";
  const formData = new FormData();
  const token = await AsyncStorage.getItem("tokenreg");
  console.log(token, "PAYMRNTDIS");
  try {
    const resp = await axios({
      method: "GET",
      url: BASE_URL + "/pg/regFee",
      //data: formData, //'emphone','pass','submit
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json, text/plain, /",
        "Content-Type": "multipart/form-data",
      },
    });
    if (resp.data) {
      dispatch({
        type: actionTypes.FINAL_REG_FEE_AMOUNT,
        payload: resp.data,
      });
    }
  } catch (error) {
    console.log(error, "ERR");
  }
};

export const CreatePaymentRequest = (action) => async (dispatch) => {
  const model = action.apiPayloadRequest;
  let formData = new FormData();
  for (const key in model) {
    formData.append(key, model[key]);
  }
  const URL = "/pg/createPayment";
  const token = await AsyncStorage.getItem("tokenreg");

  try {
    const res = await axios({
      method: "POST",
      url: BASE_URL + URL,
      data: formData, //'emphone','pass','submit
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json, text/plain, /",
        "Content-Type": "multipart/form-data",
      },
    });
    if (res) {
      let resp = res.data;
      console.log(resp, "ORDERs");
      dispatch({
        type: actionTypes.PAYMENTOEDERID,
        payload: resp,
      });
      action.callback(resp);
    }
  } catch (error) {
    if (error.response) {
      console.warn(error.response.data);
    } else {
      console.log("Something Wrong!", error.message);
    }
  }
};
