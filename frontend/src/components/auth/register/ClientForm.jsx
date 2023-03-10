import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BiDoughnutChart, BiRename } from "react-icons/bi";
import {AiFillLock} from "react-icons/ai"
import axios from "axios";
import { API } from "../../environment/constant";
import { getToken } from "../../environment/helpers";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function ClientForm() {




    const [password, setPassword] =useState(0)
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [cellphone, setPhone] = useState("");

    const navigate = useNavigate()
   
  const update = async (e) => {
   
   
      e.preventDefault();

      const data = {
        cellphone: cellphone,
        email:email,
        username: name,
        password: password,
        role: 1
      };
      console.log(data);

      axios
      .post('https://strapi-movie-app.onrender.com/api/users',data,
      )
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log(response);
        navigate('../login')
  
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
    
  };





  return (
    <div className="hero min-h-screen flex justify-center align-middle">
    <div className="card w-96 card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="text-center text-5xl font-bold">Register</h1>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <span>
                <MdEmail style={{ fontSize: "1.5rem" }} />
              </span>
              <input
                type="email"
                placeholder="info@site.com"
                className="input input-bordered input-primary w-full"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <label className="input-group">
              <span>
                <BiRename style={{ fontSize: "1.5rem" }} />
              </span>
              <input
                type="text"
                placeholder="e.g. John Doe"
                className="input input-bordered input-primary w-full"
                onChange={(e)=>setName(e.target.value)}
                value={name}
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">password</span>
            </label>
            <label className="input-group">
              <span>
                <AiFillLock style={{ fontSize: "1.5rem" }} />
              </span>
              <input
                type="password"
                placeholder="*********"
                className="input input-bordered input-primary w-full"
                onChange={(e)=>setPassword(e.target.value)}
              
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Cellphone</span>
            </label>
            <label className="input-group">
              <span>
                <IoCall style={{ fontSize: "1.5rem" }} />
              </span>
              <input
                type="tel"
                placeholder="e.g 0712345678"
                className="input input-bordered input-primary w-full"
                value={cellphone}
                onChange={(e)=>setPhone(e.target.value)}
              />
            </label>
          </div>

          <div className="flex justify-start mt-9">
            <button className="btn btn-primary" onClick={update}>
              register
            </button>
           
          </div> <span>Already have an account?  <Link className="link"  to={'/login'}>login</Link></span>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ClientForm