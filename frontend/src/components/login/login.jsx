import React, { useState } from "react";
import axios from "axios";
import { API } from "../environment/constant";
import "./login.css";
import { useFormInputValidation } from "react-form-input-validation";
import { setToken } from "../environment/helpers";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ERROR, SUCCESS } from "../environment/toast";
import jwt_decode from "jwt-decode";
import Bac from "../back/back";

function Login() {
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

  function move() {
    navigate("forgot", { replace: true });
  }

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

          console.log(user);

          setToken(jwt);
          // navigate("/admin/", { replace: true });

          const token = localStorage.getItem("jwt");
          let decoded = jwt_decode(token);
          let ID = decoded.id;

          axios
            .get(`${API}/users/${ID}?populate=*`)
            .then((data) => {
              console.log("role ", data.data.role.id);

              if (data.data.role.id === 4) {
                navigate("../customer");
              }
              if (data.data.role.id === 3) {
                navigate("/admin/", { replace: true });
              }
            })
            .catch((error) => {
              console.log(error);
            });

          SUCCESS(`Welcome ${user.username}`);
        })
        .catch((error) => {
          console.log(error.response.data.error.details.errors);
          ERROR(error.response.data.error.message);
          // setError(error.response.data.error.message);
        })
        .finally(() => {
          setLoading(false);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 2000);
        });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="fixed">
        <Bac />
      </div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
            <p className="py-6">
              Stream the world's best movies, all in one place.
            </p>
          </div>
          <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
            {loading ? (
              <progress className="progress progress-primary flex-shrink-0 w-96 h-1 loading"></progress>
            ) : (
              ""
            )}
            <div className="card-body">
              <form onSubmit={login} noValidate autoComplete="on">
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

                  <span className="mt-3">
                    <Link className="link" to={"/forgot"}>
                      Forgot password?
                    </Link>
                  </span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
                <span>
                  Don't have an account?{" "}
                  <Link className="link" to={"/register"}>
                    register
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
