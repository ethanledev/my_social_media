import Link from "next/link";
import { GiStripedSun } from "react-icons/gi";

import SearchBar from "./search-bar";
import NavLinks from "./nav-links";

import styles from "../styles/components/nav-bar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <GiStripedSun className="appIcon" />
        </a>
      </Link>
      <SearchBar />
      <NavLinks isMobile={false} />
    </div>
  );
};

export default NavBar;
