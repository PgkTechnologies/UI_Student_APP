import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

//instance.defaults.headers.common['Content-Type'] = "application/json";
instance.defaults.headers.common["Content-Type"] = "multipart/form-data";
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = "*";

// instance.interceptors.request.use(
//   (request) => {
//     const token = localStorage.getItem("token");
//     if (
//       token &&
//       request?.url !==
//         "http://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;"
//     ) {
//       request.headers.common["Authorization"] = "Bearer " + token;
//       if (request?.contentType) {
//         request.headers.common["Content-Type"] = request?.contentType;
//       } else {
//         request.headers.common["Content-Type"] = "multipart/form-data";
//       }
//     } else {
//       request.headers.common["Content-Type"] = "multipart/form-data";
//     }

//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

//Srini Added

instance.interceptors.request.use(
  (config) => {
    const accessToken = AsyncStorage.getItem("token");
    if (
      accessToken &&
      config.url.includes !==
        "http://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes"
    ) {
      config.headers.Authorization = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error.response || error.message);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;