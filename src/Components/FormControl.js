/* eslint-disable no-useless-escape */
import styles from "../UI/FormControl.module.css";
import Input from "./Input";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import { useState } from "react";

const FormControl = ({ onAddNewUser }) => {
  const [enteredFirstname, setEnteredFirstname] = useState("");
  const [enteredLastname, setEnteredLastname] = useState("");
  const [enteredDOB, setEnteredDOB] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword1, setEnteredPassword1] = useState("");
  const [enteredPassword2, setEnteredPassword2] = useState("");

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

  const [error, setError] = useState();

  const closeErrorModal = () => {
    setError(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    //Check required:
    if (
      enteredFirstname.trim().length === 0 ||
      enteredLastname.trim().length === 0 ||
      enteredDOB.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredUsername.trim().length === 0 ||
      enteredPassword1.trim().length === 0 ||
      enteredPassword2.trim().length === 0
    ) {
      setError({ title: "Empty input", message: "" });
      return;
    }

    //Check DOB validation
    const DOBRegex =
      /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    if (!DOBRegex.test(enteredDOB.trim())) {
      setError({ title: "Date of Birth", message: "" });
      return;
    }

    //Check email validation
    const emailRegex =
      /^(([^<>()[\].,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!emailRegex.test(enteredEmail.trim())) {
      setError({ title: "Email", message: "" });
      return;
    }

    //Check username length
    if (enteredUsername.length < 5) {
      setError({
        title: "Username",
        message: "- Username must be at least 5 characters",
      });
      return;
    } else if (enteredUsername.length > 10) {
      setError({
        title: "Username",
        message: "- Username must be less than 10 characters",
      });
      return;
    }

    //Check password length
    if (enteredPassword1.length < 6) {
      setError({
        title: "Password",
        message: "- Password must be at least 6 characters",
      });
      return;
    } else if (enteredPassword1.length > 10) {
      setError({
        title: "Password",
        message: "- Password must be less than 10 characters",
      });
      return;
    }

    //Check Password match:
    if (enteredPassword1 !== enteredPassword2) {
      setError({ title: "Password", message: "- They do not match" });
      return;
    }

    onAddNewUser(
      enteredFirstname,
      enteredLastname,
      enteredDOB,
      enteredEmail,
      enteredUsername,
      enteredPassword1,
      enteredPassword2
    );

    //Empty inputs:
    setEnteredFirstname("");
    setEnteredLastname("");
    setEnteredDOB("");
    setEnteredEmail("");
    setEnteredUsername("");
    setEnteredPassword1("");
    setEnteredPassword2("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          closeModal={closeErrorModal}
        />
      )}
      <form onSubmit={submitHandler} className={styles["form-control"]}>
        <h2>Register With Us</h2>
        <Input
          label={"First Name"}
          placeholder={"Enter your first name"}
          type={"text"}
          onChange={firstnameChangeHandler}
          value={enteredFirstname}
        />

        <Input
          label={"Last Name"}
          placeholder={"Enter your last name"}
          type={"text"}
          onChange={lastnameChangeHandler}
          value={enteredLastname}
        />

        <Input
          label={"Date Of Birth"}
          placeholder={"DD/MM/YYYY"}
          type={"text"}
          onChange={DOBChangeHandler}
          value={enteredDOB}
        />

        <Input
          label={"Email"}
          placeholder={"Enter your email"}
          type={"text"}
          onChange={emailChangeHandler}
          value={enteredEmail}
        />

        <Input
          label={"Username"}
          placeholder={"Enter your username"}
          type={"text"}
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />

        <Input
          label={"Password"}
          placeholder={"Enter your password"}
          type={"password"}
          onChange={password1ChangeHandler}
          value={enteredPassword1}
        />

        <Input
          label={"Confirm Password"}
          placeholder={"Enter your password again"}
          type={"password"}
          onChange={password2ChangeHandler}
          value={enteredPassword2}
        />

        <Button type={"submit"}>Submit</Button>
      </form>
    </div>
  );
};

export default FormControl;
