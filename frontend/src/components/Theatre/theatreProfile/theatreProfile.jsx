import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BiRename } from "react-icons/bi";
import axios from "axios";
import { API, TOKEN } from "../../environment/constant";
import jwt_decode from "jwt-decode";
import { useState, useEffect, useRef } from "react";
import { ERROR, SUCCESS } from "../../environment/toast";
import { ToastContainer } from "react-toastify";
import "./theatreProfile.css";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MdAddPhotoAlternate } from "react-icons/md";
import { getUser} from '../../../services/theatre.service'

function TheatreProfile() {
  let ID;
  const [userI, setUserId] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cellphone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const token = localStorage.getItem("jwt");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();
  const theatreProfile = useRef();
  const [image, setImage] = useState("");
  const imgUrl = useRef();
  const theatreID = useRef();

  // get image when you click
  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = (e) => {
      const file = e.target.files[0];
      theatreProfile.current = file;
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    };

    input.click();
  };

  // update a theatre profile image
  const uploadCinemaPoster = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("files", theatreProfile.current);
    formData.append("refID", theatreProfile.current);
    formData.append("field", "theatreImage");
    formData.append("ref", "api::theatre.theatre");

    await axios
      .post(`${API}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        imgUrl.current = data.data[0].url;
        SUCCESS("Successfully uploaded");
        axios
          .put(
            `${API}/theatres/${theatreID.current}?populate=*`,
            { data: { theatreImage: imgUrl.current } },
            {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            }
          )
          .then((data) => {
            SUCCESS("Successfully updated");
          })
          .catch((error) => {
            ERROR(error.response.data.error.message);
          })
          .finally(() => {
            setLoading(false);
            getUsers();
            theatreProfile.current = null;
          });
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      });
  };

  let decoded = jwt_decode(token);
  ID = decoded.id;

  // console.log(ID);

  const getUsers = async () => {
    setLoading(true);
    setUserId(ID);
    await getUser(ID).then((data) => {
      // console.log(data.data);
      if (data.data.role.id !== 6) {
        navigate("/home", { replace: true });
      }
      setEmail(data.data.email);
      setName(data.data.username);
      setPhone(data.data.cellphone);
      setFirstname(data.data.firstname);
      setLastname(data.data.lastname);
      setImage(data.data.theatre.theatreImage);
      theatreID.current = data.data.theatre.id;
    }).catch((error) => {
      // ERROR(error.response.data.error.message);
      console.log(error);
    })
    .finally(() => setLoading(false));
  };

  useEffect(() => {
    getUsers();
  }, [ID]);

  const update = async (e) => {
    if (window.confirm("Are you sure you want to update these?")) {
      e.preventDefault();
      setLoading(true);
      const data = {
        email: email,
        cellphone: cellphone,
        username: name,
        firstname: firstname,
        lastname: lastname,
      };

      await axios
        .put(`${API}/users/${userI}`, data)
        .then((data) => {
          SUCCESS("Profile updated.");
        })
        .catch((error) => {
          ERROR(error.response.data.error.message);
        })
        .finally(() => setLoading(false));
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();

    setLoading(true);
    const data = {
      currentPassword: currentPassword,
      password: password,
      passwordConfirmation: confirmPassword,
    };

    await axios
      .post(`${API}/auth/change-password`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        SUCCESS("Successfully change the password");
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="mt-24">
      <ToastContainer />
      <div className="hero min-h-screen flex justify-center align-middle">
        <div className="card w-96 card-compact bg-base-300 shadow-xl">
          {loading ? (
            <progress className="progress progress-primary w-96 loading"></progress>
          ) : (
            ""
          )}
          <div className="card-body">
            <div className="mb-8">
              <h1 className="text-center text-5xl font-bold mb-4">
                Cinema Image
              </h1>
              <div className="flex justify-center">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={image} alt="" />
                  </div>
                  <MdAddPhotoAlternate
                    onClick={handleClick}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <button
                  className="btn btn-success btn-xs"
                  onClick={uploadCinemaPoster}
                >
                  Upload
                </button>
              </div>
            </div>
            <hr />
            <h1 className="text-center text-5xl font-bold">Your Profile</h1>
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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your username</span>
                </label>
                <label className="input-group">
                  <span>
                    <BiRename style={{ fontSize: "1.5rem" }} />
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="input input-bordered input-primary w-full"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your firstname</span>
                </label>
                <label className="input-group">
                  <span>
                    <BiRename style={{ fontSize: "1.5rem" }} />
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="input input-bordered input-primary w-full"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your lastname</span>
                </label>
                <label className="input-group">
                  <span>
                    <BiRename style={{ fontSize: "1.5rem" }} />
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="input input-bordered input-primary w-full"
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
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
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
              </div>

              <div className="flex justify-end mt-9 space-x-2">
                <button className="btn btn-primary" onClick={update}>
                  Update
                </button>
                <label htmlFor="my-modal-3" className="btn btn-primary">
                  Change password
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Modal for change password */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Change your password</h3>

          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Current password</span>
              </label>
              <label className="input-group">
                <span>
                  <RiLockPasswordFill style={{ fontSize: "1.5rem" }} />
                </span>
                <input
                  type="password"
                  placeholder="*****************"
                  className="input input-bordered input-primary w-full"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">New password</span>
              </label>
              <label className="input-group">
                <span>
                  <RiLockPasswordFill style={{ fontSize: "1.5rem" }} />
                </span>
                <input
                  type="password"
                  placeholder="*****************"
                  className="input input-bordered input-primary w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <label className="input-group">
                <span>
                  <RiLockPasswordFill style={{ fontSize: "1.5rem" }} />
                </span>
                <input
                  type="password"
                  placeholder="*****************"
                  className="input input-bordered input-primary w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
            </div>

            <div className="flex justify-end mt-9 space-x-2">
              <button className="btn btn-primary" onClick={changePassword}>
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TheatreProfile;
