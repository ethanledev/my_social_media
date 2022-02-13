import { useState } from "react";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { TiDelete as DeleteButton } from "react-icons/ti";
import { useDispatch } from "react-redux";

import DropdownContainer from "../DropdownContainer/DropdownContainer";
import Searches from "../Searches/Searches";
import { toggleDropdown } from "../../../redux/dropdown/dropdown.actions";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInputOnFocus = () => {
    setIsInputFocused(true);
    dispatch(toggleDropdown("search"));
  };

  const handleInputOnBlur = () => {
    setIsInputFocused(false);
    dispatch(toggleDropdown(""));
  };

  return (
    <div
      className={styles.container}
      tabIndex={0}
      onFocus={handleInputOnFocus}
      onBlur={handleInputOnBlur}
    >
      <div className={styles.inputContainer}>
        {!isInputFocused && <SearchIcon className={styles.searchInputIcon} />}
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <DeleteButton
          className={`${styles.searchInputIcon} ${
            isInputFocused ? "show" : "hide"
          }`}
          onClick={() => {
            setInput("");
            setIsInputFocused(false);
          }}
        />
      </div>
      {isInputFocused && (
        <DropdownContainer topOffset="42px">
          <Searches />
        </DropdownContainer>
      )}
    </div>
  );
};

export default SearchBar;
