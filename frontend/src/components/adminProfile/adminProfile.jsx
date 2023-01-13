import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BiRename } from "react-icons/bi";
import axios from "axios";
import { API } from "../environment/constant";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";

function AdminProfile() {
  let userId;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cellphone, setPhone] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    let decoded = jwt_decode(token); //data is what you sent in.
    userId = decoded.id;
    console.log(userId);

    axios
      .get(`${API}/users/${userId}`)
      .then((data) => {
        console.log(data.data);
        setEmail(data.data.email);
        setName(data.data.username);
        setPhone(data.data.cellphone);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const update = async (e) => {
    if (window.confirm("Are you sure you want to update these?")) {
      e.preventDefault();

      const data = {
        email: email,
        cellphone: cellphone,
        username: name,
      };

      await axios.put(`${API}/users/${userId}`, data).then((data) => {
        console.log(data);
      });
    }
  };

  return (
    <div className="hero min-h-screen flex justify-center align-middle">
      <div className="card w-96 card-compact bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-center text-5xl font-bold">Profile</h1>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
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
                <span className="label-text">Your Name</span>
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
                <span className="label-text">Your Cellphone</span>
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

            <div className="flex justify-end mt-9">
              <button className="btn btn-primary" onClick={update}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
