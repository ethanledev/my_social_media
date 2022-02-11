import { useRouter } from "next/router";

import navLinkIcons from "../nav-links/utils/navLinkIcons";

import styles from "./profile-dropdown.module.css";

const ProfileDropdown = () => {
  const router = useRouter();

  const renderItems = () => {
    const items = [
      { pathName: "profile", text: "Profile" },
      { pathName: "saved", text: "Saved" },
    ];

    return items.map(({ pathName, text }) => {
      const href =
        pathName === "profile" ? "/ape" : navLinkIcons[pathName].path;
      return (
        <div
          key={pathName}
          className={styles.itemContainer}
          onClick={() => router.push(href)}
        >
          <div className={styles.icon}>{navLinkIcons[pathName].outline}</div>
          <div>{text}</div>
        </div>
      );
    });
  };

  const handleLogOut = () => {
    console.log("Log out");
  };

  return (
    <div className={styles.container}>
      {renderItems()}
      <div
        className={`${styles.logOutButton} ${styles.itemContainer}`}
        onClick={handleLogOut}
      >
        Log out
      </div>
    </div>
  );
};

export default ProfileDropdown;
