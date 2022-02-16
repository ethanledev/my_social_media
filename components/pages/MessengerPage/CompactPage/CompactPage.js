import { useState } from "react";
import Conversation from "../../../elements/Conversation/Conversation";
import ConversationsList from "../../../elements/ConversationsList/ConversationsList";

import styles from "./CompactPage.module.css";

const CompactPage = () => {
  const [tab, setTab] = useState("list");
  return (
    <div className={styles.container}>
      {tab === "list" ? (
        <ConversationsList setTab={setTab} />
      ) : (
        <Conversation backToList={() => setTab("list")} />
      )}
    </div>
  );
};

export default CompactPage;
