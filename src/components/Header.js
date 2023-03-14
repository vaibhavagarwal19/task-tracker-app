import React from "react";
import Button from "./Button";

const Header = ({onAd, showAdd}) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color={showAdd ? 'red':'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAd}  />
    </header>
  );
};

export default Header;
