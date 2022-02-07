import Link from "next/link";

import navLinkIcons from "./navLinkIcons";
import { getProfileIcon } from "..";
import DropdownContainer from "../../components/dropdown/dropdown-container";

import styles from "../../styles/components/nav-links.module.css";
import ProfileDropdown from "../../components/dropdown/profile-dropdown";

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
    <div key="profileIconButton" className={styles.dropdownButton}>
      <Link href="/ape" key="/[username]">
        <a>{getProfileIcon("s", currentPath === "/[username]")}</a>
      </Link>
    </div>
  );

  return navLinks;
};

const generateDesktopNavLinks = (currentPath, dropdown, toggleDropdown) => {
  const pathNames = ["home", "messages", "createPost"];
  const navLinks = generateNavLinks(pathNames, currentPath);

  // add notifications button and profile button
  const getDropdownContainer = (buttonType) => {
    return dropdown === buttonType ? (
      <DropdownContainer>
        {buttonType === "profile" ? (
          <ProfileDropdown />
        ) : (
          <div>Notifications</div>
        )}
      </DropdownContainer>
    ) : null;
  };

  const notificationsButton = (
    <div key="notificationsButton" className={styles.dropdownButton}>
      <div
        className={styles.dropdownIconContainer}
        tabIndex={0}
        onClick={() => toggleDropdown("notifications")}
        onBlur={() => toggleDropdown("")}
      >
        {
          navLinkIcons.notifications[
            dropdown === "notifications" ? "fill" : "outline"
          ]
        }
        {getDropdownContainer("notifications")}
      </div>
    </div>
  );

  const profileButton = (
    <div key="profileIconButton" className={styles.dropdownButton}>
      <div
        className={styles.dropdownIconContainer}
        tabIndex={0}
        onClick={() => toggleDropdown("profile")}
        onBlur={() => toggleDropdown("")}
      >
        {getProfileIcon("s", currentPath === "/[username]")}
        {getDropdownContainer("profile")}
      </div>
    </div>
  );

  navLinks.push(notificationsButton, profileButton);

  return navLinks;
};

export { generateMobileNavLinks, generateDesktopNavLinks };
