import Image from "next/image";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { IoBookmarkOutline } from "react-icons/io5";

import { getProfileIcon } from "../../../utils";

import styles from "./Post.module.css";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
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
      <Image src="/post.jpg" width={600} height={300} alt="post" />
      <div className={styles.postContent}>
        <div className={styles.interactionsContainer}>
          <div className={styles.interactions}>
            <AiOutlineHeart />
            <MdOutlineModeComment />
            <FiSend />
          </div>
          <IoBookmarkOutline />
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
