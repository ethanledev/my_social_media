import Link from "next/link";

import navLinkIcons from "./navLinkIcons";
import { getProfileIcon } from "..";

import styles from "../../styles/components/nav-links.module.css";

const generateNavLinks = (pathNames, currentPath) => {
  const navLinks = pathNames.map((pathName) => {
    const path = navLinkIcons[pathName].path;
    const icon =
      path === currentPath
        ? navLinkIcons[pathName].fill
        : navLinkIcons[pathName].outline;

    return (
      <Link key={path} href={path}>
        <a className={styles.navLinkIcon}>{icon}</a>
      </Link>
    );
  });

  return navLinks;
};

const generateMobileNavLinks = (currentPath) => {
  const pathNames = ["home", "messages", "createPost", "notifications"];
  const navLinks = generateNavLinks(pathNames, currentPath);

  // add profile picture Nav Link
  navLinks.push(
    <Link href="/ape" key="/[username]">
      <a>
        <div key="profileIconButton" className={styles.navLinkIcon}>
          {getProfileIcon("s")}
        </div>
      </a>
    </Link>
  );

  return navLinks;
};

const handleDropdownButtonOnBlur = (event, dropdownType, toggleDropdown) => {
  event.preventDefault();
  window.addEventListener("mouseup", () => toggleDropdown(dropdownType), {
    once: true,
  });
};

const generateDesktopNavLinks = (currentPath, dropdown, toggleDropdown) => {
  const pathNames = ["home", "messages", "createPost"];
  const navLinks = generateNavLinks(pathNames, currentPath);

  // add notifications button and profile button
  const getIndicator = (buttonType) => {
    return dropdown === buttonType ? (
      <div className={styles.triangleIndicator}></div>
    ) : null;
  };

  const notificationsButton = (
    <div key="notificationsButton" className={styles.dropdownButton}>
      <div
        className={styles.dropdownIconContainer}
        tabIndex={0}
        onClick={() => toggleDropdown("notifications")}
        onBlur={(event) =>
          handleDropdownButtonOnBlur(event, "notifications", toggleDropdown)
        }
      >
        {
          navLinkIcons.notifications[
            dropdown === "notifications" ? "fill" : "outline"
          ]
        }
      </div>
      {getIndicator("notifications")}
    </div>
  );

  const profileButton = (
    <div key="profileIconButton" className={styles.dropdownButton}>
      <div
        className={styles.dropdownIconContainer}
        tabIndex={0}
        onClick={() => toggleDropdown("profile")}
        onBlur={(event) =>
          handleDropdownButtonOnBlur(event, "profile", toggleDropdown)
        }
      >
        {getProfileIcon("s")}
      </div>
      {getIndicator("profile")}
    </div>
  );

  navLinks.push(notificationsButton, profileButton);

  return navLinks;
};

export { generateMobileNavLinks, generateDesktopNavLinks };
