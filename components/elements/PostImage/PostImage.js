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
import { useSelector } from "react-redux";
import { selectWindowWidth } from "../../../redux/app/app.selectors";

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
  const windowWidth = useSelector(selectWindowWidth);
  const [imageWidth, setImageWidth] = useState(0);

  const imageHeight = imageWidth * (4 / 3);

  useEffect(() => {
    if (isFullPost) {
      setImageWidth(postRef.current.clientWidth - 500);
    } else {
      setImageWidth(postRef.current.clientWidth);
    }
  }, [postRef, windowWidth, isFullPost]);

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
          width={imageWidth}
          height={imageHeight}
          alt="post"
        />
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imagesContainer}
        style={{ width: imageWidth, height: imageHeight }}
      >
        <div
          className={styles.images}
          style={{
            width: imageWidth * imageList.length,
            height: imageHeight,
            transform: `translateX(-${imageIndex * imageWidth}px)`,
          }}
        >
          {renderImages()}
        </div>
      </div>
      {imageWidth > 0 && (
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
      )}
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
