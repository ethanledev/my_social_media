import { useRouter } from "next/router";

import { navLinkIcons } from "../../../utils";

import styles from "./ProfileDropdown.module.css";

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
    router.push("/account/login");
  };

  return (
    <div className={styles.container}>
      <div className="triangleIndicator"></div>
      <div className={styles.body}>
        {renderItems()}
        <div
          className={`${styles.logOutButton} ${styles.itemContainer}`}
          onClick={handleLogOut}
        >
          Log out
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
