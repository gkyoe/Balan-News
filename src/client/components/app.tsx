import * as React from "react";
import { Link, Route, Switch, BrowserRouter, Router } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import LogIn from "./login";
import Signup from "./signup";
import SearchBar from "./searchBar";
import SideBar from "./sideBar";
import "./app.css";

const { Header, Content, Footer, Sider } = Layout;

export class App extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <Header>
            <ul>
              <div className="home-3button">
                <Link to="/">
                  <Button type="primary">Home</Button>
                </Link>
                <Link to="/signin">
                  <Button type="primary">로그인</Button>
                </Link>
                <Link to="/signup">
                  <Button type="primary">회원가입</Button>
                </Link>
              </div>
            </ul>
          </Header>
          <Switch>
            <Route exact path="/" component={SideBar}></Route>
            <Route path="/signin" component={LogIn}></Route>
            <Route path="/signup" component={Signup}></Route>
          </Switch>
        </div>

        {/* <Sider>
          <SideBar />
        </Sider> */}
      </Layout>
    );
  }
}
