import { React, useRef } from "react";
import axios from "axios";

function ForgotPassword() {

  const codeInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();

  const data = {
    code: "444@hsdd.com",
    password: passwordInput,
  };

  function forgot_Password(event) {
    axios
      .post("https://strapi-movie-app.onrender.com/api/auth/local", data, {
        headers: {
          Authorization: `Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e`,
        },
      })
      .then((response) => {
        // Handle success.
        console.log(response);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <p className="b">Reset password</p>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">OTP</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Conform password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={forgot_Password}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
