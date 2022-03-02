import { useRouter } from "next/router";
import { BiMessageSquareAdd } from "react-icons/bi";
import { IoChevronBack } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { showCreateConversation } from "../../../redux/overlay/overlay.actions";

import styles from "./ConversationsList.module.css";

const ConversationsList = ({ setTab }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleCreateMessage = () => {
    if (setTab) {
      setTab("create");
    } else {
      dispatch(showCreateConversation());
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
