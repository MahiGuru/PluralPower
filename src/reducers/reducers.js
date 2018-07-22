import { combineReducers } from "redux";
import Dashboard from "./dashboard";

const rootReducer = combineReducers({dashboard: Dashboard});
export default rootReducer;
