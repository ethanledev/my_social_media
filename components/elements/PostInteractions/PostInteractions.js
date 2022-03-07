import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiMessage3Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

import { showPost } from "../../../redux/overlay/overlay.actions";

import styles from "./PostInteractions.module.css";
import { useDispatch } from "react-redux";

const PostInteractions = ({
  isLiked,
  toggleLikePost,
  isSaved,
  toggleSavePost,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.interactionsContainer}>
        <div className={styles.interactions}>
          {isLiked ? (
            <AiFillHeart
              className={styles.likedHeart}
              onClick={toggleLikePost}
            />
          ) : (
            <AiOutlineHeart onClick={toggleLikePost} />
          )}
          <RiMessage3Line onClick={null} />
          <FiSend />
        </div>
        <div className={styles.saveButton}>
          {isSaved ? (
            <IoBookmark onClick={toggleSavePost} />
          ) : (
            <IoBookmarkOutline onClick={toggleSavePost} />
          )}
        </div>
      </div>
      <div className={styles.likes}>242 likes</div>
    </div>
  );
};

export default PostInteractions;
