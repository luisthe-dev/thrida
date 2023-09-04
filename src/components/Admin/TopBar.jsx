import React from "react";
import { BiMenu } from "react-icons/bi";
import { SlUser } from "react-icons/sl";

const TopBar = ({ toggleBar }) => {
  return (
    <>
      <div className={"AdminTopBarContainer"}>
        <BiMenu onClick={toggleBar} />
        <SlUser />
      </div>
    </>
  );
};

export default TopBar;
