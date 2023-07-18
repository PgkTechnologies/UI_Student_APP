import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import RegistrationReducer from "./RegistrationReducer";

const rootReducer = combineReducers({
  loginReducer: LoginReducer,
  regReducer: RegistrationReducer,
});

export default rootReducer;
