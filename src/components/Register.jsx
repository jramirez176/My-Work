import React from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Register extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "",
    },
  };
  //inside your html input elements, use onChange={this.onFormFieldChanged} or something like that
  //create a onFromFieldChanged; the code inside the function will be the code Mr. Gregoirio Sir writes down in his Form videos

  //write your onChange handler here

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
      firstName: this.state.formData.firstName,
      lastName: this.state.formData.lastName,
      email: this.state.formData.email,
      password: this.state.formData.password,
      passwordConfirm: this.state.formData.passwordConfirm,
      avatarUrl: this.state.formData.avatarUrl,
      tenantId: this.state.formData.tenantId,
    };

    userService
      .register(payload)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (response) => {
    console.log(response);
    toast("You have registered");
  };

  onRegisterError = (errResponse) => {
    console.log(errResponse);
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image"></div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="firstName"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.firstName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="lastName"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.lastName}
              />
            </div>
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
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input
                type="text"
                name="passwordConfirm"
                placeholder="passwordConfirm"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.passwordConfirm}
              />
              <div className="form-group">
                <label htmlFor="avatarUrl">Avatar URL</label>
                <input
                  type="text"
                  name="avatarUrl"
                  placeholder="avatarUrl"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.avatarUrl}
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
        </div>
        <div className="footer">
          <button
            href="#"
            className="nav-link px-2 text-black link-button btn"
            onClick={this.onClickHandler}
            type="button"
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;

//old code
/** 
// import React from "react";
// import * as userService from "../services/userService";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();

// function handleChange(e) {
//   console.log(e.target.value);
// }

// class Register extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formData: {
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         passwordConfirm: "",
//         avatarUrl: "",
//       },
//     };
//   }

//   //inside your html input elements, use onChange={this.onFormFieldChanged} or something like that
//   //create a onFromFieldChanged; the code inside the function will be the code Mr. Gregoirio Sir writes down in his Form videos

//   //write your onChange handler here

//   onClickHandler = () => {
//     console.log("I have been clicked");
//     toast("You got hacked!");
//     const payload = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       passwordConfirm: "",
//       avatarUrl: "",
//     };

//     userService
//       .register(payload)
//       .then(this.onRegisterSuccess)
//       .catch(this.onRegisterError);
//   };

//   onRegisterSuccess = (response) => {
//     console.log(response);
//   };

//   onRegisterError = (errResponse) => {
//     console.log(errResponse);
//   };

//   render() {
//     return (
//       <div className="base-container" ref={this.props.containerRef}>
//         <div className="header">Register</div>
//         <div className="content">
//           <div className="image"></div>
//           <div className="form">
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="username"
//                 onChange={handleChange}
//                 value={this.state.formData.username}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="text"
//                 name="email"
//                 placeholder="email"
//                 onChange={handleChange}
//                 value={this.state.formData.email}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="text"
//                 name="password"
//                 placeholder="password"
//                 onChange={handleChange}
//                 value={this.state.formData.password}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <input
//                 type="text"
//                 name="confirmPassword"
//                 placeholder="confirmPassword"
//                 onChange={handleChange}
//                 value={this.state.formData.confirmPassword}
//               />
//               <div className="form-group">
//                 <label htmlFor="avatarUrl">Avatar URL</label>
//                 <input
//                   type="text"
//                   name="avatarUrl"
//                   placeholder="avatarUrl"
//                   onChange={handleChange}
//                   value={this.state.formData.avatarUrl}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="footer">
//           <button
//             href="#"
//             className="nav-link px-2 text-black link-button btn"
//             onClick={this.onClickHandler}
//             type="button"
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Register;
*/
