import React from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "",
    },
  };

  onFormFieldChanged = (e) => {
    console.log(e.target.value);
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    this.setState(() => {
      let newState = { ...this.state.formData };
      newState[inputName] = newValue;

      return { formData: newState };
    });
  };

  onClickHandler = (e) => {
    e.preventDefault();
    console.log("I have been clicked");
    const payload = {
      email: this.state.formData.email,
      password: this.state.formData.password,
      tenantId: this.state.formData.tenantId,
    };

    userService
      .logIn(payload)
      .then(this.onlogInSuccess)
      .catch(this.onlogInError);
  };

  onLoginSuccess = (response) => {
    console.log(response);
    toast("You are logged in");
  };

  onLoginError = (errResponse) => {
    console.log(errResponse);
    toast("That didn't work");
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image"></div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="email"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                placeholder="password"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.password}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tenantId">Tenant ID</label>
              <input
                type="text"
                name="tenantId"
                placeholder="tenantId"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.tenantId}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            href="#"
            className="nav-link px-2 text-black link-button btn"
            onClick={this.onClickHandler}
            type="button"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;

// import React from "react";

// export class Login extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }

//   render() {
//     return (
//       <div className="base-container" ref={this.props.containerRef}>
//         <div className="header">Login</div>
//         <div className="content">
//           <div className="image"></div>
//           <div className="form">
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input type="text" name="username" placeholder="username" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input type="password" name="password" placeholder="password" />
//             </div>
//           </div>
//         </div>
//         <div className="footer">
//           <button type="button" className="btn">
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
