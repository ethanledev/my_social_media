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
import { Link } from "react-router-dom";

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">
        <h1>My Social Media</h1>
      </Link>
      <SearchBar />
      <NavLinks>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/create-post">
          <FontAwesomeIcon icon={faPlusSquare} />
        </Link>
        <Link to="/messages">
          <FontAwesomeIcon icon={faCommentAlt} />
        </Link>
        <ProfilePicture src="https://www.seekpng.com/png/detail/506-5061704_cool-profile-avatar-picture-cool-picture-for-profile.png" />
      </NavLinks>
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
