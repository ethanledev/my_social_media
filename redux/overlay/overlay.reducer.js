import {
  HIDE_OVERLAY,
  SHOW_CREATE_CONVERSATION,
  SHOW_POST,
} from "./overlay.types";

const INITIAL_STATE = {
  overlayType: null,
  postId: null,
};

const overlayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CREATE_CONVERSATION:
      return { ...state, overlayType: SHOW_CREATE_CONVERSATION };
    case SHOW_POST:
      return { overlayType: SHOW_POST, postId: action.payload };
    case HIDE_OVERLAY:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default overlayReducer;
