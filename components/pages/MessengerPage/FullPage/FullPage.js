import Conversation from "../../../elements/Conversation/Conversation";
import ConversationsList from "../../../elements/ConversationsList/ConversationsList";

import styles from "./FullPage.module.css";

const FullPage = () => {
  return (
    <div className={styles.container}>
      <ConversationsList />
      <Conversation />
    </div>
  );
};

export default FullPage;
