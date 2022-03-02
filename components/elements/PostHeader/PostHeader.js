import { useRouter } from "next/router";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import { getProfileIcon } from "../../../utils";

import styles from "./PostHeader.module.css";

const PostHeader = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.author} onClick={() => router.push("/hieuhmle")}>
        {getProfileIcon("m")}
        <div className={styles.info}>
          <div className={styles.displayName}>
            Hieu Le <span className={styles.username}>&middot; @hieuhmle</span>
          </div>
          <div className={styles.time}>1 DAY AGO</div>
        </div>
      </div>
      <BiDotsHorizontalRounded />
    </div>
  );
};

export default PostHeader;
