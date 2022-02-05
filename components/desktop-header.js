import { useContext } from "react";

import { DesktopHeaderContext } from "../contexts/desktop-header-context";
import NavBar from "./nav-bar";

import styles from "../styles/components/desktop-header.module.css";

const DesktopHeader = () => {
  const { dropdown } = useContext(DesktopHeaderContext);

  return (
    <div className={styles.container}>
      <NavBar />
    </div>
  );
};

export default DesktopHeader;
