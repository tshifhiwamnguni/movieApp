import { React, useRef, useState, useEffect } from "react";
import axios from "axios";
import { useFormInputValidation } from "react-form-input-validation";
import emailjs from "@emailjs/browser";
import Cookies from "universal-cookie";
function ForgotPassword() {
  const form = useRef();
  
  const [code, setCode] = useState(12);
  const [fields, errors, forms] = useFormInputValidation(

    {
      reply_to: "",
      message : "",
    },
    {
      reply_to: "required|email",
      message : "required",
    }
  );
  const cookies = new Cookies();

  useEffect(() => {
    setCode(parseInt(1245444 + Math.random() * (12454443445 - 1245444)));
  }, []);

  const  forgot_Password=async (e)=> {
    e.preventDefault();
    const isValid = await forms.validate(e);
    const data = {
      identifier: fields.email,
      
    };
    if (isValid) {
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
                  value={fields.reply_to}
                  onChange={forms.handleChangeEvent}
                  required
                  onBlur={forms.handleBlurEvent}
                  className="input input-bordered"
                /> <label className="error">
                    {errors.reply_to ? errors.reply_to : ""}
                  </label>
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
