import { useState } from "react";
import { FaRegSmileWink } from "react-icons/fa";

import styles from "./CommentBox.module.css";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  return (
    <div className={styles.container}>
      <FaRegSmileWink className={styles.emojiButton} />
      <textarea
        className={styles.input}
        placeholder="Add a comment..."
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        rows={1}
      />
      <div
        className={`${styles.postButton} ${
          !comment.length ? styles.disabled : null
        }`}
      >
        Post
      </div>
    </div>
  );
};

export default CommentBox;
