import { View, Text } from "react-native";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const loginData = useSelector((state) => state.loginReducer.token);
  const [storage, setStorage] = useState(AsyncStorage.getItem("token"));

  const removeToken = (data) => {
    setToken(data);
  };

  const getStorage = async () => {
    const store = await AsyncStorage.getItem("token");
    setStorage(store);
  };

  useEffect(() => {
    getStorage();
    if (loginData !== null) {
      setToken(loginData?.token);
      console.log("1");
    } else {
      setToken(storage);
      console.log("2");
    }
    console.log(loginData, storage, "FINAL");
    if (!loginData && !storage) {
      setToken(null);
    }
  }, [loginData, storage]);

  console.log(loginData, token, "AUTH");

  return (
    <AuthContext.Provider value={{ token, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
