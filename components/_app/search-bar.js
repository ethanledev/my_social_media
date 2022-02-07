import { useContext, useState } from "react";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { TiDelete as DeleteButton } from "react-icons/ti";
import { DesktopHeaderContext } from "../../contexts/desktop-header-context";

import styles from "../../styles/_app/search-bar.module.css";
import DropdownContainer from "./dropdown-container";

const SearchBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [input, setInput] = useState("");
  const { toggleDropdown } = useContext(DesktopHeaderContext);

  const handleInputOnFocus = () => {
    setIsInputFocused(true);
    toggleDropdown("search");
  };

  const handleInputOnBlur = () => {
    setIsInputFocused(false);
    toggleDropdown("");
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.inputContainer}
        tabIndex={1}
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
      >
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
          onClick={() => setInput("")}
        />
      </div>
      {isInputFocused && <DropdownContainer dropdownType="search" />}
    </div>
  );
};

export default SearchBar;
