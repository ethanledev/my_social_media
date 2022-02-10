import { TOGGLE_DROPDOWN } from "./dropdown.types";

export const toggleDropdown = (dropdownType) => ({
  type: TOGGLE_DROPDOWN,
  payload: dropdownType,
});
