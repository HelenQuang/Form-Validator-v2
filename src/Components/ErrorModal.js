import styles from "../UI/ErrorModal.module.css";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = ({ closeModal }) => {
  return <div className={styles["backdrop"]} onClick={closeModal}></div>;
};

const ModalOverlay = ({ title, message }) => {
  return (
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
  );
};

const ErrorModal = ({ closeModal, title, message }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={closeModal} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={closeModal} />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default ErrorModal;
