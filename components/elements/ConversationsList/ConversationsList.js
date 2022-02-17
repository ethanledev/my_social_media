import { IoChevronBack } from "react-icons/io5";
import { BiMessageSquareAdd } from "react-icons/bi";

import styles from "./ConversationsList.module.css";

const ConversationsList = ({ setTab }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.spacer}></div>
        <div>hieu.hm.le</div>
        <BiMessageSquareAdd />
      </div>
      <div onClick={setTab ? () => setTab("noname") : null}>no name</div>
    </div>
  );
};

export default ConversationsList;
