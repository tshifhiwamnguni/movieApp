import React, { useState } from "react";
import axios from "axios";
import { API } from "../environment/constant";
import { BlinkingCursorTextBuilder } from "react-animated-text-builders";
import "./login.css";

function Login() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const login = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      identifier: email,
      password: password,
    };
    await axios
      .post(`${API}/auth/local`, data)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.response.data.error.details.errors);

        setError(error.response.data.error.message);
      })
      .finally(() => setLoading(false));
  };

  if (error) {
    // Print errors if any
    return (
      <div className="wait">
        <div className="card w-96 bg-error shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Error!</h2>
            <p>An error occured: {error}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-outline btn-ghost"
                onClick={() => window.location.reload()}
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen back">
        <progress className="progress w-full loading"></progress>
        <div className="wait">
          <BlinkingCursorTextBuilder
            textStyle={{
              fontWeight: "bold",
              font: "Times New Roman",
              fontSize: "18px",
            }}
            style={{
              transform: "rotate(-10deg)",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            cursorComponent={<div style={{ color: "green" }}>......</div>}
            blinkTimeAfterFinish={-1}
          >
            LOADING
          </BlinkingCursorTextBuilder>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        {/* <progress className="progress w-full loading"></progress> */}

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={login}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
