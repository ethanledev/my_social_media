import { useState } from "react";

import Conversation from "../../../elements/Conversation/Conversation";
import ConversationInfo from "../../../elements/ConversationInfo/ConversationInfo";
import ConversationsList from "../../../elements/ConversationsList/ConversationsList";
import CreateConversation from "../../../elements/CreateConversation/CreateConversation";

import styles from "./FullPage.module.css";

const FullPage = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.container}>
      <ConversationsList setShowOverlay={setShowOverlay} />
      <div className={styles.conversationContainer}>
        {showInfo ? (
          <ConversationInfo
            closeInfo={() => setShowInfo(false)}
            addPeople={() => setShowOverlay(true)}
          />
        ) : (
          <Conversation showInfo={() => setShowInfo(true)} />
        )}
      </div>
      {showOverlay && (
        <div className="overlay">
          <CreateConversation closeModal={() => setShowOverlay(false)} />
        </div>
      )}
    </div>
  );
};

export default FullPage;
