import { combineReducers } from "redux";
import dropdownReducer from "./dropdown/dropdown.reducer";

const rootReducer = combineReducers({
  dropdown: dropdownReducer,
});

export default rootReducer;
