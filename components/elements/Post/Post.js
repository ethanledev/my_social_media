import { forwardRef, Fragment, useState } from "react";

import PostHeader from "../PostHeader/PostHeader";

import styles from "./Post.module.css";
import PostImage from "../PostImage/PostImage";
import PostInteractions from "../PostInteractions/PostInteractions";
import { useDispatch } from "react-redux";
import { showPost } from "../../../redux/overlay/overlay.actions";
import CommentBox from "../CommentBox/CommentBox";

const Post = (props, ref) => {
  const { isFullPost } = props;
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
      <div className={styles.overViewComment}>
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
    return (
      <div className={styles.fullPostContainer} ref={ref}>
        <PostImage
          isLiked={isLiked}
          likePost={toggleLikePost}
          isFullPost={true}
        />
        <div className={styles.fullPostContent}>
          <PostHeader />
          <div className={styles.comments}></div>
          <div className={styles.interactions}>
            <PostInteractions
              isLiked={isLiked}
              isSaved={isSaved}
              toggleLikePost={toggleLikePost}
              toggleSavePost={toggleSavePost}
            />
          </div>
          <CommentBox />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.overviewContainer}>
        <PostHeader />
        <PostImage
          isLiked={isLiked}
          likePost={toggleLikePost}
          isFullPost={false}
        />
        <div className={styles.overviewContent}>
          <PostInteractions
            isLiked={isLiked}
            isSaved={isSaved}
            toggleLikePost={toggleLikePost}
            toggleSavePost={toggleSavePost}
          />
          <div className={styles.overViewComments}>
            {renderCommentsOverview()}
          </div>
        </div>
      </div>
    );
  }
};

export default forwardRef(Post);
