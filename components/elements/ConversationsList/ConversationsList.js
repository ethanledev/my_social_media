import { IoChevronBack } from "react-icons/io5";

import styles from "./ConversationsList.module.css";

const ConversationsList = ({ setTab }) => {
  return (
    <div className={styles.container}>
      <div>hieu.hm.le</div>
      <div onClick={setTab ? () => setTab("noname") : null}>no name</div>
    </div>
  );
};

export default ConversationsList;
