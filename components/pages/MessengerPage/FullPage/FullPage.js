import { useState } from "react";

import Conversation from "../../../elements/Conversation/Conversation";
import ConversationsList from "../../../elements/ConversationsList/ConversationsList";
import CreateConversation from "../../../elements/CreateConversation/CreateConversation";

import styles from "./FullPage.module.css";

const FullPage = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className={styles.container}>
      <ConversationsList setShowOverlay={setShowOverlay} />
      <Conversation />
      {showOverlay && (
        <div className="overlay">
          <CreateConversation closeModal={() => setShowOverlay(false)} />
        </div>
      )}
    </div>
  );
};

export default FullPage;
