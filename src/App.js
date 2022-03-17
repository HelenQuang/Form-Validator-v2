import "./App.css";
import FormControl from "./Components/FormControl";
import Button from "./Components/Button";
import PopupModal from "./Components/PopupModal";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log();
  };

  const getData = (data) => {
    console.log(data);
  };

  const onClickHandler = () => {};

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <h2>Register With Us</h2>
        <FormControl getData={getData} />
        <Button type={"submit"} onClick={onClickHandler}>
          Submit
        </Button>
      </form>

      <PopupModal />
    </div>
  );
};

export default App;
