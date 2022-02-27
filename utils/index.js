import Image from "next/image";
import {
  AiFillHome,
  AiOutlineHome,
  AiFillMessage,
  AiOutlineMessage,
  AiOutlineUser,
} from "react-icons/ai";
import { BsPlusSquareFill, BsPlusSquare } from "react-icons/bs";
import {
  IoNotificationsOutline,
  IoNotificationsSharp,
  IoSearchOutline,
  IoSearchSharp,
  IoBookmarkOutline,
  IoBookmark,
} from "react-icons/io5";

export const getProfileIcon = (
  size,
  isActive = false,
  handleOnClick = null
) => {
  const sizes = {
    s: 35,
    m: 45,
    l: 90,
    xl: 170,
  };

  const profileIcon = (
    <div
      className="profilePicture"
      style={{ width: sizes[size], height: sizes[size] }}
    >
      <Image
        src="/TK-Bored-Ape.jpg"
        width={sizes[size]}
        height={sizes[size]}
        alt="Profile Picture"
        onClick={handleOnClick}
        className={isActive ? "active" : null}
      />
    </div>
  );

  return profileIcon;
};

export const navLinkIcons = {
  home: {
    path: "/",
    fill: <AiFillHome />,
    outline: <AiOutlineHome />,
  },
  messenger: {
    path: "/account/messenger",
    fill: <AiFillMessage />,
    outline: <AiOutlineMessage />,
  },
  createPost: {
    path: "/account/create-post",
    fill: <BsPlusSquareFill />,
    outline: <BsPlusSquare />,
  },
  notifications: {
    path: "/account/notifications",
    fill: <IoNotificationsSharp />,
    outline: <IoNotificationsOutline />,
  },
  search: {
    path: "/explore/search",
    fill: <IoSearchSharp />,
    outline: <IoSearchOutline />,
  },
  profile: {
    path: "/[username]",
    outline: <AiOutlineUser />,
  },
  saved: {
    path: "/account/saved-posts",
    fill: <IoBookmark />,
    outline: <IoBookmarkOutline />,
  },
};
