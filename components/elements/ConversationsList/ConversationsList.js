import { useRouter } from "next/router";
import { BiMessageSquareAdd } from "react-icons/bi";
import { IoChevronBack } from "react-icons/io5";

import styles from "./ConversationsList.module.css";

const ConversationsList = ({ setTab }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {setTab ? (
          <IoChevronBack onClick={router.back} />
        ) : (
          <div className={styles.spacer} />
        )}
        <div>hieu.hm.le</div>
        <BiMessageSquareAdd onClick={() => setTab("create")} />
      </div>
      <div onClick={setTab ? () => setTab("noname") : null}>no name</div>
    </div>
  );
};

export default ConversationsList;
