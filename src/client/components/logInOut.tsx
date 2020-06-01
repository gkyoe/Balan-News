import * as React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

// interface LogProps {
//   btn: string;
// }

// const pushSignin = () => {
//   return axios({
//     method: "GET",
//     url: `http://localhost:8080/signin`,
//   });
// };

// const pushSignup = () => {
//   return axios({
//     method: "GET",
//     url: `http://localhost:8080/signup`,
//   });
// };

const LogInOut: React.FC = () => {
  return (
    <div>
      <Link to="/signin">
        <button id="signin">로그인</button>
      </Link>
      <Link to="/signup">
        <button id="signup">회원가입</button>
      </Link>
    </div>
  );
};

export default LogInOut;
