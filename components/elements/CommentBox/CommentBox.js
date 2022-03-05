import { useCallback, useEffect, useRef, useState } from "react";
import { FaRegSmileWink } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectWindowWidth } from "../../../redux/app/app.selectors";

import styles from "./CommentBox.module.css";

const MAX_ROWS = 4;
const INPUT_MIN_HEIGHT = 17;

const CommentBox = () => {
  const [text, setText] = useState("");
  const [inputHeight, setInputHeight] = useState(INPUT_MIN_HEIGHT);
  const [overflowStyle, setOverfowStyle] = useState("hidden");
  const windowWidth = useSelector(selectWindowWidth);
  const inputRef = useRef();

  const handleInputHeight = useCallback(async () => {
    const scrollHeight = inputRef.current.scrollHeight;
    const padding =
      getComputedStyle(inputRef.current).paddingLeft.split("px")[0] * 2;

    if (scrollHeight - padding <= INPUT_MIN_HEIGHT * MAX_ROWS) {
      setInputHeight(scrollHeight - padding);
    } else {
      setInputHeight(INPUT_MIN_HEIGHT * MAX_ROWS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputHeight]);

  useEffect(() => {
    if (inputHeight !== INPUT_MIN_HEIGHT) {
      const scrollHeight = inputRef.current.scrollHeight;
      const lineHeight = getComputedStyle(inputRef.current).lineHeight.split(
        "px"
      )[0];
      const heightRatio = Math.floor(scrollHeight / lineHeight);

      if (heightRatio > MAX_ROWS) {
        setOverfowStyle("auto");
      } else {
        setOverfowStyle("hidden");
      }
    }
  }, [inputHeight]);

  useEffect(() => {
    setInputHeight(INPUT_MIN_HEIGHT);
    handleInputHeight();
  }, [windowWidth, text, handleInputHeight]);

  return (
    <div className={styles.container}>
      <FaRegSmileWink className={styles.emojiButton} />
      <textarea
        className={styles.input}
        placeholder="Add a comment..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        ref={inputRef}
        style={{ height: inputHeight, overflow: overflowStyle }}
      />
      <div
        className={`${styles.postButton} ${
          !text.length ? styles.disabled : null
        }`}
      >
        Post
      </div>
    </div>
  );
};

export default CommentBox;
