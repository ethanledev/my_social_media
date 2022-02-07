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
} from "react-icons/io5";

const navLinkIcons = {
  home: {
    path: "/",
    fill: <AiFillHome />,
    outline: <AiOutlineHome />,
  },
  messages: {
    path: "/account/messages",
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
    outline: <IoBookmarkOutline />,
  },
};

export default navLinkIcons;
