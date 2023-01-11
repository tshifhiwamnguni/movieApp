import { React, useRef, useState, useEffect } from "react";
import Cookies from "universal-cookie";
function ResetPassword() {
  const form = useRef();
  const cookies = new Cookies();
  function reset_Password(e) {
    e.preventDefault();

    console.log(cookies.get("code"));
  }

  return (
    <>
      <form ref={form} onSubmit={reset_Password}>
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
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ResetPassword;
