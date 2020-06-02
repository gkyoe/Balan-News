import * as React from "react";
import { Link, Route, Switch, BrowserRouter, Router } from "react-router-dom";
import axios from "axios";
import LogIn from "./login";
import Signup from "./signup";
import SearchBar from "./searchBar";
import SideBar from "./sideBar";
import "./app.css";

interface CounterProps {
  name: string;
}

interface CounterState {
  count: number;
  width: string;
  height: string;
}

export class App extends React.Component {
  constructor(props: CounterProps) {
    super(props);
    this.state = {};
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

  render() {
    // const { name } = this.props;

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
        <SideBar width={500} height={"100vh"}></SideBar>
      </BrowserRouter>
    );
  }
}
