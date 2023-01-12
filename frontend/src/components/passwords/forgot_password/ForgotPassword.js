import { React, useRef } from "react";
import axios from "axios";
import { useFormInputValidation } from "react-form-input-validation";
import "./ForgotPassword.css";


function ForgotPassword() {
  const [fields, errors, form] = useFormInputValidation(
    {
      email: "",
    },
    {
      email: "required|email",
    }
  );



  const forms = useRef();




  const emailInputRefs = useRef();

  const tries = async (e) => {
    const isValid = await form.validate(e);
    if (isValid) {
      console.log(fields, errors);
      forgot_Password(e)
    }
  };

  async function forgot_Password  (e){
    e.preventDefault();

    const isValid = await form.validate(e);
    const enteredEmail = emailInputRefs.current.value;
    let data = {
      email: enteredEmail,
    };

    console.log(data);
    if (isValid) {


    axios
      .post(
        "https://strapi-movie-app.onrender.com/api/auth/forgot-password",
        data,
        {
          headers: {
            Authorization:
              "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
          },
        }
      )
      .then((response) => {
        // Handle success.
        console.log(response);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
    }
        
    e.target.reset();
  };

  return (
    <>
      <form ref={forms} onSubmit={tries}>
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <p className="b">Reset password</p>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">email</span>
                </label>

                <input
                  type="text"
                  ref={emailInputRefs}
                  name="email"
                  placeholder="email"
                  value={fields.email}
                  onChange={form.handleChangeEvent}
                  onBlur={form.handleBlurEvent}
                  className="input input-bordered"
                />

                <label className="error">
                  {errors.email ? errors.email : ""}
                </label>
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

export default ForgotPassword;