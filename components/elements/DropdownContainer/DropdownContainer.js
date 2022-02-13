import styles from "./DropdownContainer.module.css";

const DropdownContainer = ({ children, topOffset }) => {
  return (
    <div className={styles.container} style={{ top: topOffset }}>
      <div className={styles.triangleIndicator}></div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default DropdownContainer;
