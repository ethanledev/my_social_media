import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaCircle,
} from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import "react-slideshow-image/dist/styles.css";

import styles from "./PostImage.module.css";

const imageList = [
  "post1.png",
  "post2.png",
  "post3.png",
  "post4.png",
  "post5.png",
  "post6.png",
];

const PostImage = ({ isFullPost, isLiked, likePost, postRef }) => {
  const imageNum = 6;
  const [imageIndex, setImageIndex] = useState(0);
  const [showHeart, setShowHeart] = useState(false);
  const [dbClickActive, setDbClickActive] = useState(true);
  const width = isFullPost ? 1000 : 600;
  const height = isFullPost ? 1200 : 800;

  if (isFullPost) {
    console.log(postRef);
  }

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

  const renderImages = () => {
    return imageList.map((imageId, index) => (
      <div key={index}>
        <Image
          onDoubleClick={(e) => handleDoubleClick(e)}
          src={`/${imageId}`}
          width={width}
          height={height}
          alt="post"
        />
      </div>
    ));
  };

  const getPostWidth = () => {
    if (postRef.current) {
      if (isFullPost) {
        return postRef.current.clientWidth - 500;
      } else {
        return postRef.current.clientWidth;
      }
    } else {
      return 0;
    }
  };

  const getPostHeight = () => {
    if (postRef.current) {
      if (isFullPost) {
        return postRef.current.clientWidth * (4 / 3);
      } else {
        return postRef.current.clientWidth * (4 / 3);
      }
    } else {
      return 0;
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imagesContainer}
        style={{ width: getPostWidth(), height: getPostHeight() }}
      >
        <div
          className={styles.images}
          style={{
            width: getPostWidth() * imageList.length,
            height: getPostHeight(),
            transform: `translateX(-${imageIndex * getPostWidth()}px)`,
          }}
        >
          {renderImages()}
        </div>
      </div>
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
            visibility: imageIndex === imageNum - 1 ? "hidden" : "visible",
          }}
          onClick={() => changeImage("next")}
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
