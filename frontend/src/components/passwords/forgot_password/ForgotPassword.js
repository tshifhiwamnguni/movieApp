import { React, useRef, useState, useEffect } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import Cookies from "universal-cookie";
function ForgotPassword() {
  const form = useRef();
  const [code, setCode] = useState(12);

  const cookies = new Cookies();

  useEffect(() => {
    setCode(parseInt(1245444 + Math.random() * (12454443445 - 1245444)));
  }, []);

  function forgot_Password(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n92xeeo",
        "template_i7z5wv2",
        form.current,
        "XjpWlWZjyp4WBGqeM"
      )
      .then(
        (result) => {
          cookies.set("code", code, { path: "/", maxAge: 4000 });
          console.log(cookies.get("code"));
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <form ref={form} onSubmit={forgot_Password}>
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
                  name="reply_to"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <input
                name="message"
                hidden
                onChange={() => {}}
                value={code}
              ></input>

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
