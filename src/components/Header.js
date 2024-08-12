import Button from "./Button";

const Header = ({ showAdd, changeOpenCard }) => {
  return (
    <header className="header">
      <h1>Task tracker</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Open"}
        onClick={changeOpenCard}
      />
    </header>
  );
};

export default Header;
