import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";

import styles from "./CreateConversation.module.css";

const CreateConversation = ({ closeModal, backToList }) => {
  const containerRef = useRef();

  const handleOnBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      tabIndex={0}
      onBlur={(e) => handleOnBlur(e)}
    >
      <div className={styles.header}>
        {closeModal ? (
          <IoMdClose onClick={closeModal} />
        ) : (
          <IoChevronBack onClick={() => backToList()} />
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
