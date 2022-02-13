import { useRouter } from "next/router";
import EmptyDropdown from "../EmptyDropdown/EmptyDropdown";

import styles from "./Notifications.module.css";

const isEmpty = true;

const Notifications = () => {
  const router = useRouter();
  const { pathname } = router;
  const isDropdown = pathname !== "/account/notifications";
  const dropdownStyles = isDropdown ? styles.dropdown : null;

  const renderDropdownItems = () => {
    if (isEmpty) {
      return <EmptyDropdown message="You have no notifications." />;
    }
  };

  return (
    <div className={`${styles.container} ${dropdownStyles}`}>
      {isDropdown && <div className="triangleIndicator"></div>}
      <div className={styles.body}>
        <h1 className={styles.title}>Notifications</h1>
        {renderDropdownItems()}
      </div>
    </div>
  );
};

export default Notifications;
