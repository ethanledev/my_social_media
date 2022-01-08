import React from "react";
import { HeaderContainer, HeaderContent, NavLinks } from "./header.styles";
import { ProfilePicture } from "../../App.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCommentAlt,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../search-bar/search-bar.component";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isCurrentPath = (path) => path === location.pathname;
  const getIconColor = (path) => {
    if (isCurrentPath(path)) {
      return {
        color: "black",
      };
    } else {
      return {
        color: "grey",
      };
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <h1>My Instagram</h1>
        </Link>
        <SearchBar />
        <NavLinks>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} style={getIconColor("/")} />
          </Link>
          <Link to="/create-post">
            <FontAwesomeIcon
              icon={faPlusSquare}
              style={getIconColor("/create-post")}
            />
          </Link>
          <Link to="/messages">
            <FontAwesomeIcon
              icon={faCommentAlt}
              style={getIconColor("/messages")}
            />
          </Link>
          <ProfilePicture src="https://www.seekpng.com/png/detail/506-5061704_cool-profile-avatar-picture-cool-picture-for-profile.png" />
        </NavLinks>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
