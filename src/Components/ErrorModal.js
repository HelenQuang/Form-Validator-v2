import styles from "../UI/ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = ({ title, message, closeModal }) => {
  return (
    <div>
      <div className={styles["backdrop"]} onClick={closeModal}></div>

      <div className={styles["error-modal"]}>
        <header>
          <h2>Error message</h2>
        </header>
        <div>
          <p>
            {title} is invalid {message}. Please try again.
          </p>
        </div>
        <footer>
          <Button type="submit" onClick={closeModal}>
            Retry
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
