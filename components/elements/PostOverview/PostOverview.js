import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectWindowWidth } from "../../../redux/app/app.selectors";

import PostHeader from "../PostHeader/PostHeader";
import PostImage from "../PostImage/PostImage";
import PostInteractions from "../PostInteractions/PostInteractions";

import styles from "./PostOverview.module.css";

const PostOverview = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const windowWidth = useSelector(selectWindowWidth);
  const containerRef = useRef();

  useEffect(() => {
    setContainerWidth(containerRef.current.clientWidth);
  }, [windowWidth, containerRef]);

  const toggleLikePost = () => {
    setIsLiked(!isLiked);
  };

  const toggleSavePost = () => {
    setIsSaved(!isSaved);
  };

  const calculateImageSize = () => {
    const { ratio } = data.images;
    const width = containerWidth;
    let height = 0;
    if (ratio === 1 / 1) {
      height = width;
    } else if (ratio === 4 / 5) {
      height = width / ratio;
    } else if (ratio === 16 / 9) {
      height = width / ratio;
    }
    return { width, height };
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <PostHeader />
      {containerRef && (
        <PostImage
          isLiked={isLiked}
          likePost={toggleLikePost}
          isOverview={true}
          containerRef={containerRef}
          images={{
            size: calculateImageSize(),
            list: data.images.list,
          }}
        />
      )}
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
