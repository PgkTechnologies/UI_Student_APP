import { View, Text } from "react-native";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actionTypes from "../store/actions";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const loginData = useSelector((state) => state.loginReducer.token);
  const [storage, setStorage] = useState(AsyncStorage.getItem("token"));

  const removeToken = async (data) => {
    setToken(data);
    await AsyncStorage.removeItem("token");
    dispatch({ type: actionTypes.LOGINREQUEST, payload: null });
  };

  const getStorage = async () => {
    const store = await AsyncStorage.getItem("token");
    setStorage(store);
  };

  useEffect(() => {
    getStorage();
    if (loginData !== null) {
      setToken(loginData?.token);
    } else {
      setToken(storage);
    }
    if (!loginData && !storage) {
      setToken(null);
    }
  }, [loginData, storage]);

  return (
    <AuthContext.Provider value={{ token, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
