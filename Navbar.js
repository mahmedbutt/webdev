import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import SignIn from "./pages/Signin";
import Posts from "./Posts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <div>
        <ReactBootStrap.Navbar bg="#fff" expand="lg">
          <NavLink to="/">
            <ReactBootStrap.Navbar.Brand>coursera</ReactBootStrap.Navbar.Brand>
          </NavLink>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav>
              <ReactBootStrap.Button variant="primary">
                Explore
              </ReactBootStrap.Button>
              <ReactBootStrap.Form inline>
                <ReactBootStrap.FormControl
                  type="text"
                  placeholder="web programming"
                  className="mr-auto"
                />
                <ReactBootStrap.Button variant="primary">
                  Search
                </ReactBootStrap.Button>
              </ReactBootStrap.Form>
            </ReactBootStrap.Nav>

            <ReactBootStrap.Nav class="ml-auto">
              <ReactBootStrap.Button variant="link">
                For Enterprise
              </ReactBootStrap.Button>
              <ReactBootStrap.Button variant="link">
                For Students
              </ReactBootStrap.Button>
              <NavLink activeClassName="active" to="/signin">
                <ReactBootStrap.Button variant="link">
                  Login
                </ReactBootStrap.Button>
              </NavLink>
              <ReactBootStrap.Button variant="primary">
                Join for Free
              </ReactBootStrap.Button>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>

      <Switch>
        <Route path="/" exact>
          <Posts></Posts>
        </Route>
        <Route path="/signin" exact>
          <SignIn></SignIn>
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
