import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { toggleDropdown } from "../../../redux/dropdown/dropdown.actions";
import EmptyDropdown from "../EmptyDropdown/EmptyDropdown";

import styles from "./Notifications.module.css";

const isEmpty = true;

const Notifications = () => {
  const [tab, setTab] = useState("all");
  const dispatch = useDispatch();
  const router = useRouter();
  const { pathname } = router;
  const isDropdown = pathname !== "/account/notifications";
  const dropdownStyles = isDropdown ? styles.dropdown : null;

  const activeStyles = (tabName) => (tabName === tab ? styles.active : null);

  const renderDropdownItems = () => {
    if (isEmpty) {
      return <EmptyDropdown message="You have no notifications." />;
    }
  };

  const redirectToNotificationsPage = () => {
    dispatch(toggleDropdown(""));
    router.push("/account/notifications");
  };

  return (
    <div className={`${styles.container} ${dropdownStyles}`}>
      {isDropdown && <div className="triangleIndicator"></div>}
      <div className={styles.body}>
        <div className={styles.header}>
          <h1 className={styles.title}>Notifications</h1>
          {isDropdown && (
            <div className={styles.link} onClick={redirectToNotificationsPage}>
              See all
            </div>
          )}
        </div>
        <div className={styles.buttons}>
          <div className={styles.tabs}>
            <div
              className={`${styles.tab} ${activeStyles("all")}`}
              onClick={() => setTab("all")}
            >
              All
            </div>
            <div
              className={`${styles.tab} ${activeStyles("unread")}`}
              onClick={() => setTab("unread")}
            >
              Unread
            </div>
          </div>
          <IoMdCheckmarkCircleOutline
            title="Mark all as read"
            className={styles.markAllAsReadButton}
            onClick={() => console.log("click")}
          />
        </div>
        {renderDropdownItems()}
      </div>
    </div>
  );
};

export default Notifications;
