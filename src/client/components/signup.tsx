import * as React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

interface signupProps {
  // props: string;
  // name: string;
  // value: string;
  // e: any;
}

interface signupStatus {
  name: string;
  mail: string;
  password: string;
  isSignUp: boolean;
}

export default class Signup extends React.Component<signupProps, signupStatus> {
  constructor(props: string) {
    super(props);
    this.state = {
      name: "",
      mail: "",
      password: "",
      isSignUp: false,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // const { name, value } = event.target;
    this.setState({ name: event.target.value });
    console.log(this.state);
  };

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
      name: this.state.name,
      mail: this.state.mail,
      password: this.state.password,
    };
    console.log(user);

    axios.post(`http://localhost:3000/signup`, user).then((res) => {
      console.log(res);
      console.log(res.data);
      this.setState({ isSignUp: true });
    });
  };

  render() {
    if (this.state.isSignUp) {
      return <Redirect to="/" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
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
        <button type="submit">회원가입</button>
      </form>
    );
  }
}
