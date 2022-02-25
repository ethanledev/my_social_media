import { useRouter } from "next/router";
import { BiMessageSquareAdd } from "react-icons/bi";
import { IoChevronBack } from "react-icons/io5";

import styles from "./ConversationsList.module.css";

const ConversationsList = ({ setTab, setShowOverlay }) => {
  const router = useRouter();

  const handleCreateMessage = () => {
    if (setTab) {
      setTab("create");
    } else {
      setShowOverlay(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {setTab ? (
          <IoChevronBack onClick={router.back} />
        ) : (
          <div className={styles.spacer} />
        )}
        <div>hieu.hm.le</div>
        <BiMessageSquareAdd onClick={handleCreateMessage} />
      </div>
      <div onClick={setTab ? () => setTab("conversation") : null}>no name</div>
    </div>
  );
};

export default ConversationsList;
