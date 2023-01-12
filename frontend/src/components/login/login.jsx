import React, { useState } from "react";
import axios from "axios";
import { API } from "../environment/constant";
import "./login.css";
import { useFormInputValidation } from "react-form-input-validation";
import { setToken, setData } from "../environment/helpers";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import {ERROR, SUCCESS} from '../environment/toast'

function Login() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [fields, errors, form] = useFormInputValidation(
    {
      identifier: "",
      password: "",
    },
    {
      identifier: "required|email",
      password: "required|min:6",
    }
  );

  const login = async (e) => {
    e.preventDefault();

    const isValid = await form.validate(e);

    if (isValid) {
      setLoading(true);

      const data = {
        identifier: fields.identifier,
        password: fields.password,
      };
      await axios
        .post(`${API}/auth/local`, data)
        .then(({ data }) => {
          const { jwt, user } = data;
          setToken(jwt);
          SUCCESS("Successfully logged in!")

          console.log(data);
          setTimeout(() => {
            navigate("/");
          }, 1000);
          
        })
        .catch((error) => {
          console.log(error.response.data.error.details.errors);
          ERROR(error.response.data.error.message)
          // setError(error.response.data.error.message);

        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div>
      <ToastContainer />
      {loading ? (
        <progress className="progress primary w-full loading"></progress>
      ) : (
        ""
      )}
      <div className="hero min-h-screen bg-base-200">
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
              <form onSubmit={login} noValidate autoComplete="off">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="identifier"
                    onBlur={form.handleBlurEvent}
                    onChange={form.handleChangeEvent}
                    value={fields.identifier}
                    required
                  />
                  <label className="error">
                    {errors.identifier ? errors.identifier : ""}
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    onBlur={form.handleBlurEvent}
                    onChange={form.handleChangeEvent}
                    value={fields.password}
                    required
                    minLength={6}
                    maxLength={16}
                  />
                  <label className="error">
                    {errors.password ? errors.password : ""}
                  </label>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn btn-primary"
                    type="submit"
                  >
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
