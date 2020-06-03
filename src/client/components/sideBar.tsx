import * as React from "react";
import SearchBar from "./searchBar";
import "./sideBar.css";

interface Props {
  width: number;
  height: string;
  transform: number;
  handleToggle: any;
}

export class Sidebar extends React.Component<Props> {
  //   constructor(props: Props) {
  //     super(props);
  //   }

  render() {
    const transform = this.props.transform;
    console.log(transform);
    return (
      <table>
        <tr
          style={{
            transform: `translateX(${this.props.transform}px)`, //470
          }}
        >
          <th>
            <div
              className="side-bar"
              style={{
                width: this.props.width,
                minHeight: this.props.height,
                transform: `translateX(${this.props.transform}px)`, //470
              }}
            >
              <SearchBar />
            </div>
          </th>
          <th>
            <div
              className="toggle-bar"
              style={{
                width: 50,
                minHeight: this.props.height,
              }}
              onClick={this.props.handleToggle}
            ></div>
          </th>
        </tr>
      </table>
    );
  }
}

export default Sidebar;
