import Image from "next/image";

import { AiFillHeart } from "react-icons/ai";
import { RiMessage3Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { showPost } from "../../../redux/overlay/overlay.actions";

import styles from "./PostTile.module.css";

const PostTile = ({ id, list }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container} onClick={null}>
      <Image
        src="/post1.png"
        layout="responsive"
        width={0}
        height={0}
        alt="post"
      />
      <div className={styles.overlay}>
        <span>
          <p>4,520</p>
          <AiFillHeart />
        </span>
        <span>
          <p>99</p>
          <RiMessage3Fill />
        </span>
      </div>
    </div>
  );
};

export default PostTile;
