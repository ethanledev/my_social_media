import styles from "../../styles/components/dropdown-container.module.css";

const DropdownContainer = ({ dropdownType }) => {
  return (
    <div className={styles.container}>
      <div className={styles.triangleIndicator}></div>
      <div className={styles.body}>{dropdownType}</div>
    </div>
  );
};

export default DropdownContainer;
