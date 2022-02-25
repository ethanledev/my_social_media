import { AiFillInfoCircle } from "react-icons/ai";
import { IoChevronBack } from "react-icons/io5";

import styles from "./ConversationInfo.module.css";

const ConversationInfo = ({ closeInfo, addPeople, backToConversation }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {backToConversation ? (
          <IoChevronBack onClick={backToConversation} />
        ) : (
          <div className={styles.spacer}></div>
        )}

        <div className={styles.title}>Details</div>
        <AiFillInfoCircle onClick={closeInfo} />
      </div>
      <div className={styles.members}>
        <div className={styles.header} style={{ border: "none" }}>
          <h2>Members</h2>
          <span onClick={addPeople}>Add People</span>
        </div>
      </div>
      <div className={styles.footer}>
        <div>Leave Chat</div>
        <div>Delete Chat</div>
      </div>
    </div>
  );
};

export default ConversationInfo;
