import styles from "./EmptyDropdown.module.css";

const EmptyDropdown = ({ message }) => (
  <div className={styles.container}>{message}</div>
);

export default EmptyDropdown;
