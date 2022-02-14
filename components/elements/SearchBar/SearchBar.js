import { useState } from "react";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { TiDelete as DeleteButton } from "react-icons/ti";
import { useDispatch } from "react-redux";

import Searches from "../Searches/Searches";
import { toggleDropdown } from "../../../redux/dropdown/dropdown.actions";

import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { pathname } = router;
  const isOnSearchPage = pathname === "/explore/search";

  const handleInputOnFocus = () => {
    setIsInputFocused(true);
    dispatch(toggleDropdown("search"));
  };

  const handleInputOnBlur = () => {
    setIsInputFocused(false);
    dispatch(toggleDropdown(""));
  };

  return (
    !isOnSearchPage && (
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
        {isInputFocused && <Searches />}
        {/*!isOnSearchPage && <Searches />*/}
      </div>
    )
  );
};

export default SearchBar;
