import { useRouter } from "next/router";

import EmptyDropdown from "../EmptyDropdown/EmptyDropdown";

import styles from "./Searches.module.css";

const Searches = () => {
  const router = useRouter();
  const { pathname } = router;
  const isDropdown = pathname !== "/explore/search";
  const dropdownStyles = isDropdown ? styles.dropdown : null;

  const renderDropdownItems = () => {
    if (true) {
      return <EmptyDropdown message="No recent searches." />;
    }
  };

  return (
    <div className={`${styles.container} ${dropdownStyles}`}>
      {isDropdown && <div className="triangleIndicator"></div>}
      <div className={styles.body}>
        <div className={styles.header}>
          <h1 className={styles.title}>Recent</h1>
          <div className={styles.link}>Clear All</div>
        </div>
        {renderDropdownItems()}
      </div>
    </div>
  );
};

export default Searches;
