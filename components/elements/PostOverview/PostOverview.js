import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import PostHeader from "../PostHeader/PostHeader";
import PostImage from "../PostImage/PostImage";
import PostInteractions from "../PostInteractions/PostInteractions";
import { showPost } from "../../../redux/overlay/overlay.actions";

import styles from "./PostOverview.module.css";

const PostOverview = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const containerRef = useRef();
  const dispatch = useDispatch();

  const toggleLikePost = () => {
    setIsLiked(!isLiked);
  };

  const toggleSavePost = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <PostHeader />
      <PostImage
        isLiked={isLiked}
        likePost={toggleLikePost}
        isFullPost={false}
        containerRef={containerRef}
      />
      <div className={styles.content}>
        <PostInteractions
          isLiked={isLiked}
          isSaved={isSaved}
          toggleLikePost={toggleLikePost}
          toggleSavePost={toggleSavePost}
        />
        <div className={styles.comments}>
          <div className={styles.comment}>
            <span>hieuhmle</span>
            <span>amazing!</span>
          </div>
          <div className={styles.viewAllComments} onClick={null}>
            View all 273 comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostOverview;
