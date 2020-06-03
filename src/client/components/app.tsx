import * as React from "react";
import { Link, Route, Switch, BrowserRouter, Router } from "react-router-dom";
import axios from "axios";
import LogIn from "./login";
import Signup from "./signup";
import SearchBar from "./searchBar";
import SideBar from "./sideBar";
import "./app.css";

interface CounterProps {
  // name: string;
}

interface CounterState {
  count: number;
  width: number;
  height: string;
  transform: number;
}

export class App extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
      width: 450,
      height: "100vh",
      transform: 0,
    };
    // this.handleToggle = this.handleCloseToggle.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000`)
      .then((res) => {
        console.log("clinet server is running!");
      })
      .catch((err) => {
        throw err.message;
      });
  }

  handleCloseToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (this.state.transform === 0) {
      this.setState({ transform: -450 });
    } else {
      this.setState({ transform: 0 });
    }
    console.log(this.state.transform);
  };

  render() {
    // const handleToggle = this.handleCloseToggle;

    return (
      <BrowserRouter>
        <header>
          <div className="home-3button">
            <Link to="/">
              <button className="home-button">Home</button>
            </Link>
            <Link to="/signin">
              <button className="login-button">로그인</button>
            </Link>
            <Link to="/signup">
              <button className="signup-button">회원가입</button>
            </Link>
          </div>

          {/* <h1>Balan News</h1> */}
        </header>
        {/* <hr /> */}
        <main>
          <Route path="/signin" component={LogIn}></Route>
          <Route path="/signup" component={Signup}></Route>
          {/* <SearchBar /> */}
        </main>
        <SideBar
          width={this.state.width}
          height={this.state.height}
          transform={this.state.transform}
          handleToggle={this.handleCloseToggle}
        ></SideBar>
      </BrowserRouter>
    );
  }
}
