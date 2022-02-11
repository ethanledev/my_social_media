import Link from "next/link";
import { GiStripedSun } from "react-icons/gi";

import SearchBar from "../search-bar/search-bar";
import NavLinks from "../nav-links/nav-links";

import styles from "./desktop-header.module.css";

const DesktopHeader = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <GiStripedSun className="appLogo" />
        </a>
      </Link>
      <SearchBar />
      <NavLinks isMobile={false} />
    </div>
  );
};

export default DesktopHeader;
