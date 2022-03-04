import { combineReducers } from "redux";
import appReducer from "./app/app.reducer";
import dropdownReducer from "./dropdown/dropdown.reducer";
import overlayReducer from "./overlay/overlay.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  dropdown: dropdownReducer,
  overlay: overlayReducer,
});

export default rootReducer;
