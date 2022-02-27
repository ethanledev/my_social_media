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
      <div>
        <Link href="/explore/search">
          <a className={styles.navLinkIcon}>
            {currentPath === "/explore/search"
              ? navLinkIcons.search.fill
              : navLinkIcons.search.outline}
          </a>
        </Link>
        <Link href="/account/saved-posts">
          <a className={styles.navLinkIcon}>
            {currentPath === "/account/saved-posts"
              ? navLinkIcons.saved.fill
              : navLinkIcons.saved.outline}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MobileHeader;
