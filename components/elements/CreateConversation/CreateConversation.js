import { IoMdClose } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";

import styles from "./CreateConversation.module.css";

const CreateConversation = ({ closeModal, backToList }) => {
  return (
    <div className={styles.container}>
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
