import "./App.css";
import FormControl from "./Components/FormControl";
import UserTable from "./Components/UserTable";
import { useState } from "react";

const App = () => {
  const [usersList, setUsersList] = useState([
    {
      key: 123,
      firstname: "Ha",
      lastname: "Quang",
      birth: "25/06/1997",
      email: "qvha.97@gmail.com",
      username: "CamTheMeow",
    },
  ]);

  const addNewUserHandler = (
    userFirstname,
    userLastname,
    userBirth,
    userEmail,
    userUsername
  ) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          key: Math.random(),
          firstname: userFirstname,
          lastname: userLastname,
          birth: userBirth,
          email: userEmail,
          username: userUsername,
        },
      ];
    });
  };

  return (
    <div className="container">
      <FormControl onAddNewUser={addNewUserHandler} />
      <UserTable users={usersList} />
    </div>
  );
};

export default App;
