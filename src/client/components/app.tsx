import * as React from "react";
import { Link, Route, Switch, BrowserRouter, Router } from "react-router-dom";

import LogIn from "./login";
import Signup from "./signup";
import SearchBar from "./searchBar";
import SideBar from "./sideBar";
import "./app.css";

export class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
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
        </ul>
        <Switch>
          <Route exact path="/" component={SideBar}></Route>
          <Route path="/signin" component={LogIn}></Route>
          <Route path="/signup" component={Signup}></Route>
        </Switch>
      </div>
    );
  }
}
