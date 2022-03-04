import { CHANGE_WINDOW_WIDTH } from "./app.types";

const INITIAL_STATE = {
  widowWidth: 0,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_WINDOW_WIDTH:
      return { ...state, windowWidth: action.payload };

    default:
      return state;
  }
};

export default appReducer;
