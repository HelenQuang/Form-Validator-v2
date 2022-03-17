import styles from "../UI/FormControl.module.css";
import Input from "./Input";
import { useState } from "react";

const FormControl = ({ getData }) => {
  const [enteredFirstname, setEnteredFirstname] = useState("");
  const [enteredLastname, setEnteredLastname] = useState("");
  const [enteredDOB, setEnteredDOB] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enterUsername, setEnteredUsername] = useState("");
  const [enteredPassword1, setEnteredPassword1] = useState("");
  const [enteredPassword2, setEnteredPassword2] = useState("");

  const data = enteredFirstname + enteredLastname;

  getData(data);

  const firstnameChangeHandler = (e) => {
    setEnteredFirstname(e.target.value);
  };

  const lastnameChangeHandler = (e) => {
    setEnteredLastname(e.target.value);
  };

  const DOBChangeHandler = (e) => {
    setEnteredDOB(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const password1ChangeHandler = (e) => {
    setEnteredPassword1(e.target.value);
  };

  const password2ChangeHandler = (e) => {
    setEnteredPassword2(e.target.value);
  };

  return (
    <div className={styles["form-control"]}>
      <Input
        label={"First Name"}
        placeholder={"Enter your first name"}
        type={"text"}
        onChange={firstnameChangeHandler}
      />

      <Input
        label={"Last Name"}
        placeholder={"Enter your last name"}
        type={"text"}
        onChange={lastnameChangeHandler}
      />

      <Input
        label={"Date Of Birth"}
        placeholder={"DD/MM/YYYY"}
        type={"text"}
        onChange={DOBChangeHandler}
      />

      <Input
        label={"Email"}
        placeholder={"Enter your email"}
        type={"text"}
        onChange={emailChangeHandler}
      />

      <Input
        label={"Username"}
        placeholder={"Enter your username"}
        type={"text"}
        onChange={usernameChangeHandler}
      />

      <Input
        label={"Password"}
        placeholder={"Enter your password"}
        type={"password"}
        onChange={password1ChangeHandler}
      />

      <Input
        label={"Confirm Password"}
        placeholder={"Enter your password again"}
        type={"password"}
        onChange={password2ChangeHandler}
      />
    </div>
  );
};

export default FormControl;
