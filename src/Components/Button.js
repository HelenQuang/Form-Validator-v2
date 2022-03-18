import styles from "../UI/Button.module.css";

const Button = ({ type, children, onClick }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
