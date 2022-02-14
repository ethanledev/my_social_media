import Link from "next/link";
import { useRouter } from "next/router";
import { GiStripedSun } from "react-icons/gi";

import { navLinkIcons } from "../../../utils";

import styles from "./MobileHeader.module.css";

const MobileHeader = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className={styles.container}>
      <div className={styles.spacer}></div>
      <Link href="/">
        <a className="appLogo">
          <GiStripedSun />
        </a>
      </Link>
      <Link href="/explore/search">
        <a className={styles.searchIcon}>
          {currentPath === "/explore/search"
            ? navLinkIcons.search.fill
            : navLinkIcons.search.outline}
        </a>
      </Link>
    </div>
  );
};

export default MobileHeader;
