import { CHANGE_WINDOW_WIDTH } from "./app.types";

export const changeWindowWidth = (windowWidth) => ({
  type: CHANGE_WINDOW_WIDTH,
  payload: windowWidth,
});
