import { useRouter } from "next/router";

import {
  generateDesktopNavLinks,
  generateMobileNavLinks,
} from "../utils/nav-links";

import styles from "../styles/components/nav-links.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { DesktopHeaderContext } from "../contexts/desktop-header-context";

const NavLinks = ({ isMobile }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [navLinks, setNavLinks] = useState([]);
  const desktopHeaderContext = useContext(DesktopHeaderContext);

  useEffect(() => {
    const renderNavLinks = () => {
      if (isMobile) {
        return generateMobileNavLinks(currentPath);
      } else {
        const { dropdown, toggleDropdown } = desktopHeaderContext;
        return generateDesktopNavLinks(currentPath, dropdown, toggleDropdown);
      }
    };

    setNavLinks(renderNavLinks());
  }, [isMobile, currentPath, desktopHeaderContext]);

  return <div className={styles.container}>{navLinks}</div>;
};

export default NavLinks;
