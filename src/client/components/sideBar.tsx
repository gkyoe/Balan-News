import * as React from "react";
import SearchBar from "./searchBar";
import "./sideBar.css";

interface Props {
  width: number;
  height: string;
}

const Sidebar = (props: Props) => {
  return (
    <div
      className="side-bar"
      style={{ width: props.width, minHeight: props.height }}
    >
      <SearchBar />
    </div>
  );
};

export default Sidebar;
