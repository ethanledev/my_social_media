import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import navLinkIcons from "../utils/navLinkIcons";

import styles from "../styles/components/nav-links.module.css";

const NavLinks = ({ isMobile }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [navLinks, setNavLinks] = useState([]);

  const generateNavLinks = useCallback(() => {
    const generateNavLink = (pathName) => {
      const path = navLinkIcons[pathName].path;
      const navLinkIcon =
        path === currentPath
          ? navLinkIcons[pathName].fill
          : navLinkIcons[pathName].outline;

      return (
        <Link key={path} href={path}>
          <a>{navLinkIcon}</a>
        </Link>
      );
    };

    const initialPathNames = ["home", "messages", "createPost"];

    const navLinks = initialPathNames.map((pathName) =>
      generateNavLink(pathName)
    );

    const profileIcon = (
      <div key="profileIconButton" style={{ cursor: "pointer" }}>
        <Image
          className="profile-picture"
          src="/TK-Bored-Ape.jpg"
          width={45}
          height={45}
          alt="Profile Picture"
        />
      </div>
    );

    if (isMobile) {
      navLinks.push(generateNavLink("notifications"));

      navLinks.push(
        <Link href="/ape" key="/[username]">
          <a>{profileIcon}</a>
        </Link>
      );
    } else {
      const notificationsButton = (
        <div key="notificationButton" style={{ cursor: "pointer" }}>
          {navLinkIcons.notifications.outline}
        </div>
      );

      navLinks.push(notificationsButton, profileIcon);
    }

    return navLinks;
  }, [currentPath, isMobile]);

  useEffect(() => {
    setNavLinks(generateNavLinks);
  }, [generateNavLinks]);

  return <div className={styles.container}>{navLinks}</div>;
};

export default NavLinks;
