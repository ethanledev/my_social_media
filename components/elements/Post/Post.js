import { Fragment, useState } from "react";

import PostHeader from "../PostHeader/PostHeader";

import styles from "./Post.module.css";
import PostImage from "../PostImage/PostImage";
import PostInteractions from "../PostInteractions/PostInteractions";

const Post = ({ isFullPost }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const toggleLikePost = () => {
    setIsLiked(!isLiked);
  };

  const toggleSavePost = () => {
    setIsSaved(!isSaved);
  };

  const renderCommentsOverview = () => (
    <Fragment>
      <div className={styles.comment}>
        <span>hieuhmle</span>
        <span>amazing!</span>
      </div>
      <div className={styles.viewAllComments}>View all 273 comments</div>
    </Fragment>
  );

  return (
    <div className={styles.container}>
      <PostHeader />
      <PostImage
        isLiked={isLiked}
        likePost={toggleLikePost}
        isFullPost={false}
      />
      <div className={styles.postContent}>
        <PostInteractions
          isLiked={isLiked}
          isSaved={isSaved}
          toggleLikePost={toggleLikePost}
          toggleSavePost={toggleSavePost}
        />
        <div className={styles.comments}>{renderCommentsOverview()}</div>
      </div>
    </div>
  );
};

export default Post;
