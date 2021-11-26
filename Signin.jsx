import React, { Component } from "react";
import { PostProjecttoMongo, ValidateSignin } from "../RESTAPI_CALLER";
import "./Signin.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { signin: [] };
  }

  render() {
    return (
      <div>
        <div className="divsignup">
          <form
            onSubmit={(event) => {
              console.log(this.state.new_project);
              console.log("Form's on Sumbit called");
              event.preventDefault();
              this.state.signin.map((validate) => {
                return PostProjecttoMongo({
                  username: this.state.username,
                  password: this.state.password,
                }).then((response) => {
                  console.log(response.data);
                  if (
                    this.state.username === validate.username &&
                    this.state.password === validate.password
                  ) {
                    this.setState({ redirect: "/" });
                  } else {
                    this.setState({ redirect: null });
                  }
                });
              });
            }}
          >
            <div className="un">
              <label>
                Username:{" "}
                <input
                  type="text"
                  value={this.state.username}
                  onChange={(event) => {
                    this.setState({ username: event.target.value });
                  }}
                ></input>
              </label>
            </div>
            <div className="pwd">
              <label>
                Password:{" "}
                <input
                  type="password"
                  value={this.state.password}
                  onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }}
                ></input>
              </label>
            </div>
            <div className="button">
              <input className="btn" type="submit" value="Log In"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("Projects_Display mounted.");
    this.FetchValidateSignin();
  }

  FetchValidateSignin() {
    ValidateSignin().then((response) => {
      console.log(response.data);
      this.setState({ signin: response.data });
    });
    return [];
  }
}
export default SignIn;
