import { useState } from "react";

import Conversation from "../../../elements/Conversation/Conversation";
import ConversationInfo from "../../../elements/ConversationInfo/ConversationInfo";
import ConversationsList from "../../../elements/ConversationsList/ConversationsList";

import styles from "./FullPage.module.css";

const FullPage = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.container}>
      <ConversationsList />
      <div className={styles.conversationContainer}>
        {showInfo ? (
          <ConversationInfo
            closeInfo={() => setShowInfo(false)}
            addPeople={null}
          />
        ) : (
          <Conversation showInfo={() => setShowInfo(true)} />
        )}
      </div>
    </div>
  );
};

export default FullPage;
