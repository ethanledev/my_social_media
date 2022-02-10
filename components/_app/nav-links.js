import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  generateDesktopNavLinks,
  generateMobileNavLinks,
} from "../../utils/nav-links";
import { selectDropdown } from "../../redux/dropdown/dropdown.selectors";

import styles from "../../styles/_app/nav-links.module.css";

const NavLinks = ({ isMobile }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [navLinks, setNavLinks] = useState([]);
  const dropdown = useSelector(selectDropdown);
  const dispatch = useDispatch();

  useEffect(() => {
    const renderNavLinks = () => {
      if (isMobile) {
        return generateMobileNavLinks(currentPath);
      } else {
        return generateDesktopNavLinks(currentPath, dropdown, dispatch);
      }
    };

    setNavLinks(renderNavLinks());
  }, [isMobile, currentPath, dropdown, dispatch]);

  return <div className={styles.container}>{navLinks}</div>;
};

export default NavLinks;
