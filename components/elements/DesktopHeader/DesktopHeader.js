import Link from "next/link";
import { GiStripedSun } from "react-icons/gi";

import SearchBar from "../SearchBar/SearchBar";
import NavLinks from "../NavLinks/NavLinks";

import styles from "./DesktopHeader.module.css";

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
