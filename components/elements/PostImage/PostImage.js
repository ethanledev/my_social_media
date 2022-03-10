import { useState } from "react";
import Image from "next/image";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaCircle,
} from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

import styles from "./PostImage.module.css";

const PostImage = ({ isOverview, isLiked, likePost, images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showHeart, setShowHeart] = useState(false);
  const [dbClickActive, setDbClickActive] = useState(true);
  const { size, list } = images;
  const { width, height } = size;

  const handleDoubleClick = (e) => {
    if (e.target === e.currentTarget && dbClickActive) {
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
      case "prev":
        setImageIndex(imageIndex - 1);
        break;
      case "next":
        setImageIndex(imageIndex + 1);
        break;

      default:
        break;
    }
  };

  const renderDots = () => {
    let dots = [];
    for (let i = 0; i < list.length; i++) {
      dots.push(
        <FaCircle
          key={i}
          style={i === imageIndex ? { color: "var(--button-blue)" } : null}
        />
      );
    }

    return dots;
  };

  const renderImages = () => {
    return list.map((imageId, index) => (
      <div key={index}>
        <Image
          onDoubleClick={(e) => handleDoubleClick(e)}
          src={`${imageId}`}
          width={width}
          height={height}
          alt="post"
        />
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer} style={{ width, height }}>
        <div
          className={styles.images}
          style={{
            width: width * list.length,
            height,
            transform: `translateX(-${imageIndex * width}px)`,
          }}
        >
          {renderImages()}
        </div>
      </div>
      {width > 0 && (
        <div
          className={styles.overlay}
          onDoubleClick={(e) => handleDoubleClick(e)}
        >
          <FaChevronCircleLeft
            className={styles.arrows}
            style={{ visibility: imageIndex < 1 ? "hidden" : "visible" }}
            onClick={() => changeImage("prev")}
          />
          {showHeart && <AiFillHeart className={styles.heart} />}
          <FaChevronCircleRight
            className={styles.arrows}
            style={{
              visibility: imageIndex === list.length - 1 ? "hidden" : "visible",
            }}
            onClick={() => changeImage("next")}
          />
        </div>
      )}
      <div
        className={`${styles.dots} ${
          isOverview ? styles.overview : styles.full
        }`}
      >
        {renderDots()}
      </div>
    </div>
  );
};

export default PostImage;
