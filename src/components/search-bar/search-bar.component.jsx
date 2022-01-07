import React, { useState } from "react";
import { SearchBarContainer } from "./search-bar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <SearchBarContainer>
      {!isInputFocused ? <FontAwesomeIcon icon={faSearch} /> : null}
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onFocus={() => {
          setInputFocused(true);
        }}
        onBlur={() => {
          setInputFocused(false);
        }}
      />
      {input.length || isInputFocused ? (
        <FontAwesomeIcon icon={faTimesCircle} onClick={() => setInput("")} />
      ) : null}
    </SearchBarContainer>
  );
};

export default SearchBar;
