import { IoChevronBack } from "react-icons/io5";

import styles from "./Conversation.module.css";

const Conversation = ({ backToList }) => {
  return (
    <div className={styles.container}>
      <div>
        {backToList && <IoChevronBack onClick={() => backToList()} />}
        <div>Hieu Le</div>
      </div>
      <div></div>
    </div>
  );
};

export default Conversation;
