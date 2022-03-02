import { combineReducers } from "redux";
import dropdownReducer from "./dropdown/dropdown.reducer";
import overlayReducer from "./overlay/overlay.reducer";

const rootReducer = combineReducers({
  dropdown: dropdownReducer,
  overlay: overlayReducer,
});

export default rootReducer;
