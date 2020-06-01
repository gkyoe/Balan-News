import * as React from "react";
import { Link, Route, Switch, BrowserRouter, Router } from "react-router-dom";
import axios from "axios";
import LogIn from "./login";
import Signup from "./signup";

interface CounterProps {
  name: string;
}

interface CounterState {
  count: number;
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

  //   increase = () => {
  //     const { count } = this.state;
  //     this.setState({ count: count + 1 });
  //   };

  render() {
    // const { name } = this.props;

    return (
      <BrowserRouter>
        <header>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/signin">
            <button>로그인</button>
          </Link>
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
          <h1>Balan News</h1>
        </header>
        <hr />
        <main>
          <Route path="/signin" component={LogIn}></Route>
          <Route path="/signup" component={Signup}></Route>
        </main>
      </BrowserRouter>
    );
  }
}
