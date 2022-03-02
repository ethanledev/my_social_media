import { useState } from "react";
import Image from "next/image";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaCircle,
} from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

import styles from "./PostImage.module.css";

const PostImage = ({ isFullPost, isLiked, likePost }) => {
  const imageNum = 6;
  const [imageIndex, setImageIndex] = useState(0);
  const [showHeart, setShowHeart] = useState(false);
  const [dbClickActive, setDbClickActive] = useState(true);

  const handleDoubleClick = (e) => {
    if (e.target === e.currentTarget && dbClickActive) {
      console.log("dbClick");
      setDbClickActive(false);
      if (!isLiked) {
        likePost();
      }

      if (!showHeart) {
        setShowHeart(true);
        setTimeout(() => {
          setShowHeart(false);
          setDbClickActive(true);
        }, 1500);
      }
    }
  };

  const changeImage = (direction) => {
    switch (direction) {
      case "back":
        setImageIndex(imageIndex - 1);
        break;
      case "forward":
        setImageIndex(imageIndex + 1);
        break;

      default:
        break;
    }
  };

  const renderDots = () => {
    let dots = [];
    for (let i = 0; i < imageNum; i++) {
      dots.push(
        <FaCircle
          key={i}
          className={i === imageIndex ? styles.blueDot : null}
        />
      );
    }

    return dots;
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src="/post.jpg" width={600} height={600} alt="post" />
      </div>
      <div
        className={styles.overlay}
        onDoubleClick={(e) => handleDoubleClick(e)}
      >
        <FaChevronCircleLeft
          style={{ visibility: imageIndex < 1 ? "hidden" : "visible" }}
          onClick={() => changeImage("back")}
        />
        {showHeart && <AiFillHeart className={styles.heart} />}
        <FaChevronCircleRight
          style={{
            visibility: imageIndex === imageNum - 1 ? "hidden" : "visible",
          }}
          onClick={() => changeImage("forward")}
        />
      </div>
      <div
        className={`${styles.dots} ${
          isFullPost ? styles.full : styles.preview
        }`}
      >
        {renderDots()}
      </div>
    </div>
  );
};

export default PostImage;
