import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import {dashboardReducer} from './dashboardReducer'
const reducers = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
});
export default reducers;