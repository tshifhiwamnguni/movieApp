import { React, useRef, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { ERROR, SUCCESS } from "../../environment/toast";
import { ToastContainer } from "react-toastify";

function ResetPassword() {
  const form = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const passwordInputRefs = useRef();
  const confirmPasswordInputRefs = useRef();
  const [loading, setLoading] = useState(false);


  const reset_Password = async(e) => {
    e.preventDefault();
  
    const enteredPassword = passwordInputRefs.current.value;
    const enteredConfirmPassword = confirmPasswordInputRefs.current.value;

    
    const data = {
      code: searchParams.get('code'),
      password: enteredPassword,
      passwordConfirmation: enteredConfirmPassword,
      // code: 'privateCode',
      // password: 'myNewPassword',
      // passwordConfirmation: 'myNewPassword'
    };
    
    setLoading(true);
    
      await axios
        .post(
          'https://strapi-movie-app.onrender.com/api/auth/reset-password',data,
          {
            headers: {
              Authorization:
                "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
            },
          }
        )
        .then((response) => {
          // Handle success.
          SUCCESS('Password has been reseted');
          console.log(response);
           
        })
        .catch((error) => {
          // Handle error.
          ERROR(error.response.data.error.message)
          console.log("An error occurred:", error.response);
        }).finally(()=>setLoading(false));
    }
  

  return (
    <>
    <ToastContainer />
      <form ref={form} onSubmit={reset_Password}>
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {loading ? (
              <progress className="progress progress-primary w-80 h-1 loading"></progress>
            ) : (
              ""
            )}
            <div className="card-body">
              <div className="card-title">Reset password</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  ref={passwordInputRefs}
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Conform password</span>
                </label>
                <input
                  type="password"
                  ref={confirmPasswordInputRefs}
                  placeholder="confirm password"
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
