import Axios from "../../utils/Axios";
import axios from "axios";

export const loginRequest = (model) => {
  const URL = "https://devapi.c2hire.com/api/o/login";
  let formData = new FormData();
  formData.append("stakeholder", model.stakeholder);
  formData.append("userID", model.userID);
  formData.append("password", model.password);
  return axios.POST(URL, formData).then((res) => {
    return res.data;
  });
};
