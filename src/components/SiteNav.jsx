import React from "react";
import { NavLink } from "react-router-dom";
import * as userService from "../services/userService";

class SiteNav extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.state);

    const payload = {
      email: "user@google.com",
      password: "Sabio123!",
      tenantId: "U01TZFAPstF37",
    };

    userService
      .logIn(payload)
      .then(this.onLogInSuccess)
      .catch(this.onLogInError);
  }

  onClickHandler = () => {
    const payload = {
      email: "user@google.com",
      password: "Sabio123!",
      tenantId: "U01TZFAPstF37",
    };

    userService
      .logIn(payload)
      .then(this.onLogInSuccess)
      .catch(this.onLogInError);
  };

  onLogInSuccess = (res) => {
    console.log(res);
  };

  onLogInError = (err) => {
    console.log(err);
  };

  render() {
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                src="https://pw.sabio.la/images/Sabio.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Sabio"
              />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-secondary link-button"
                >
                  SiteNav
                </button>
              </li>
              <li>
                <button className="nav-link px-2 text-white link-button">
                  <NavLink to="/Jumbo">Go to Jumbo</NavLink>
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  <NavLink to="/Content">Go to Content</NavLink>
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onClickHandler}
                >
                  About
                </button>
              </li>
            </ul>
            <li>
              <button className="nav-link px-2 text-white link-button">
                <NavLink to="/Register">Register</NavLink>
              </button>
            </li>
            <li>
              <button href="#" className="nav-link px-2 text-white link-button">
                <NavLink to="/Login">Login</NavLink>
              </button>
            </li>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="email"
                className="form-control form-control-dark"
                placeholder="Email..."
                aria-label="Email"
              />
            </form>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="password"
                className="form-control form-control-dark"
                placeholder="Password..."
                aria-label="Password"
              />
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default SiteNav;
