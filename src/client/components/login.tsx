import * as React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

interface logProps {
  // props: string;
  // name: string;
  // value: string;
  // e: any;
}

interface logStatus {
  mail: string;
  password: string;
  isLogin: boolean;
}

export default class LogIn extends React.Component<logProps, logStatus> {
  constructor(props: string) {
    super(props);
    this.state = {
      mail: "",
      password: "",
      isLogin: false,
    };

    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // const { name, value } = event.target;
    this.setState({ mail: event.target.value });
    console.log(this.state);
  };

  handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // const { name, value } = event.target;
    this.setState({ password: event.target.value });
    console.log(this.state);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      mail: this.state.mail,
      password: this.state.password,
    };
    console.log(user);

    axios.post(`http://localhost:3000/signin`, user).then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        this.setState({ isLogin: true });
      }
    });
  };

  render() {
    if (this.state.isLogin) {
      return <Redirect to={"/"} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          mail:
          <input
            name="mail"
            type="text"
            value={this.state.mail}
            onChange={this.handleChangeMail}
          />
          password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </label>
        <button type="submit">로그인</button>
      </form>
    );
  }
}
