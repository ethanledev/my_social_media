import Link from "next/link";

import navLinkIcons from "../../utils/nav-links/navLinkIcons";

import styles from "../../styles/components/dropdown/profile-dropdown.module.css";

const ProfileDropdown = () => {
  const renderItems = () => {
    const items = [
      { pathName: "profile", text: "Profile" },
      { pathName: "saved", text: "Saved" },
    ];

    return items.map(({ pathName, text }) => {
      const href =
        pathName === "profile" ? "/ape" : navLinkIcons[pathName].path;
      return (
        <Link key={pathName} href={href}>
          <a className={styles.itemContainer}>
            <div className={styles.icon}>{navLinkIcons[pathName].outline}</div>
            <div>{text}</div>
          </a>
        </Link>
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
