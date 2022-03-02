import { Fragment, useState } from "react";

import PostHeader from "../PostHeader/PostHeader";

import styles from "./Post.module.css";
import PostImage from "../PostImage/PostImage";
import PostInteractions from "../PostInteractions/PostInteractions";
import { useDispatch } from "react-redux";
import { showPost } from "../../../redux/overlay/overlay.actions";

const Post = ({ isFullPost }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();

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
      <div
        className={styles.viewAllComments}
        onClick={() => dispatch(showPost("postId"))}
      >
        View all 273 comments
      </div>
    </Fragment>
  );

  if (isFullPost) {
    return <div>Post</div>;
  } else {
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
  }
};

export default Post;
