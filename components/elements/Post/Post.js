import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiMessage3Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaCircle,
} from "react-icons/fa";

import { getProfileIcon } from "../../../utils";

import styles from "./Post.module.css";

const Post = () => {
  const router = useRouter();
  const imageNum = 6;
  const [imageIndex, setImageIdex] = useState(0);
  const [showHeart, setShowHeart] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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

  const changeImage = (direction) => {
    switch (direction) {
      case "back":
        setImageIdex(imageIndex - 1);
        break;
      case "forward":
        setImageIdex(imageIndex + 1);
        break;

      default:
        break;
    }
  };

  const handleDoubleClick = (e) => {
    if (!isLiked) {
      setIsLiked(true);
    }

    if (!showHeart) {
      if (e.target === e.currentTarget) {
        setShowHeart(true);
        setTimeout(() => setShowHeart(false), 1500);
      }
    }
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleSavePostClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.author} onClick={() => router.push("/hieuhmle")}>
          {getProfileIcon("m")}
          <div className={styles.info}>
            <div className={styles.username}>hieuhmle</div>
            <div className={styles.displayName}>Hieu Le</div>
          </div>
        </div>
        <BiDotsHorizontalRounded />
      </div>
      <div className={styles.image}>
        <Image src="/post.jpg" width={600} height={600} alt="post" />
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
      </div>
      <div className={styles.postContent}>
        <div className={styles.interactionsContainer}>
          <div className={styles.interactions}>
            {isLiked ? (
              <AiFillHeart
                className={styles.likedHeart}
                onClick={handleLikeClick}
              />
            ) : (
              <AiOutlineHeart onClick={handleLikeClick} />
            )}
            <RiMessage3Line />
            <FiSend />
          </div>
          <div className={styles.dots}>{renderDots()}</div>
          <div className={styles.saveButton}>
            {isSaved ? (
              <IoBookmark onClick={handleSavePostClick} />
            ) : (
              <IoBookmarkOutline onClick={handleSavePostClick} />
            )}
          </div>
        </div>
        <div className={styles.likes}>242 likes</div>
        <div className={styles.comments}>
          <div className={styles.comment}>
            <span>hieuhmle</span>
            <span>jinx</span>
          </div>
          <div className={styles.showFullPost}>View all 273 comments</div>
          <div className={styles.comment}>
            <span>saigonez</span>
            <span>I feel for her</span>
          </div>
          <div className={styles.comment}>
            <span>noname</span>
            <span>T.T</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
