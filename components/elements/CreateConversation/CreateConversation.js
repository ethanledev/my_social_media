import { forwardRef, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { hideOverlay } from "../../../redux/overlay/overlay.actions";

import styles from "./CreateConversation.module.css";

const CreateConversation = ({ backToList, setComponentRefs }) => {
  const containerRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (setComponentRefs) {
      setComponentRefs([containerRef]);
    }
  }, [containerRef, setComponentRefs]);

  return (
    <div
      className={styles.container}
      ref={setComponentRefs ? containerRef : null}
    >
      <div className={styles.header}>
        {backToList ? (
          <IoChevronBack onClick={() => backToList()} />
        ) : (
          <IoMdClose onClick={() => dispatch(hideOverlay())} />
        )}
        <h1 className={styles.title}>New Message</h1>
        <div className={styles.nextButton}>Next</div>
      </div>
      <div className={styles.searchField}>
        <label htmlFor="search">To:</label>
        <input
          name="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
      <div className={styles.userList}></div>
    </div>
  );
};

export default CreateConversation;
