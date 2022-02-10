import { TOGGLE_DROPDOWN } from "./dropdown.types";

const INITIAL_STATE = {
  dropdownType: "",
};

const toggleDropdown = (currentType, nextType) => {
  if (nextType === currentType) {
    return "";
  } else {
    return nextType;
  }
};

const dropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      return {
        dropdownType: toggleDropdown(state.dropdownType, action.payload),
      };
    default:
      return INITIAL_STATE;
  }
};

export default dropdownReducer;
