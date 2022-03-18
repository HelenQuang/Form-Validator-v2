import styles from "../UI/Button.module.css";

const Button = ({ type, children }) => {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
