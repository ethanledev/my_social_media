import { useState } from "react";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { TiDelete as DeleteButton } from "react-icons/ti";

import styles from "../styles/components/search-bar.module.css";

const SearchBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocused = () => {
    setIsInputFocused(true);
  };

  const handleInputLoseFocus = () => {
    setIsInputFocused(false);
  };

  return (
    <div className={styles.container}>
      {!isInputFocused && <SearchIcon className={styles.searchIcon} />}
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
        onFocus={handleInputFocused}
        onBlur={handleInputLoseFocus}
      />
      {isInputFocused && <DeleteButton className={styles.searchIcon} />}
    </div>
  );
};

export default SearchBar;
