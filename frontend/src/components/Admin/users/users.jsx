import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { API, TOKEN } from "../../environment/constant";
import { BiRename } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { GiPlayerNext } from "react-icons/gi";
<<<<<<< HEAD:frontend/src/components/users/users.jsx
import { ERROR, SUCCESS } from "../environment/toast";
import './users.css'
=======
import { ERROR, SUCCESS } from "../../environment/toast";
import './users.css'
import Spin from "../../Spinner/Spin";
>>>>>>> d1fc4871ff931d2b9599706ef71711ab8bb6a311:frontend/src/components/Admin/users/users.jsx

function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState([]);
  const [userRole, setUserRole] = useState("");
  const userID = useRef();
<<<<<<< HEAD:frontend/src/components/users/users.jsx
=======
  const [isBlocked, setIsBlocked] = useState(false);
  const [deleteLoader, setDeleteLoader]=useState(false);
>>>>>>> d1fc4871ff931d2b9599706ef71711ab8bb6a311:frontend/src/components/Admin/users/users.jsx

  const getUsers = async () => {
    setLoading(true);
    await axios
      .get(`${API}/users?populate=*&sort=id%3Aasc`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        console.log(data.data);
        setUsers(data.data);
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getRoles = async () => {
    setLoading(true);
    axios
      .get(`${API}/users-permissions/roles`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        console.log(data.data.roles);
        setRoles(data.data.roles);
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  function getSelected(user) {
    setFirstname(user.firstname);
    setLastname(user.lastname);
    setUsername(user.username);
    setEmail(user.email);
    setUserRole(user.role.id);
    userID.current = user.id;
<<<<<<< HEAD:frontend/src/components/users/users.jsx
=======
    setIsBlocked(user.blocked);
>>>>>>> d1fc4871ff931d2b9599706ef71711ab8bb6a311:frontend/src/components/Admin/users/users.jsx
  }

  const deleteUser = async () => {
    setLoading(true);
    axios
      .delete(`${API}/users/${userID.current}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        SUCCESS("Successfully deleted");
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      })
      .finally(() => {
        setLoading(false);
        getUsers();
      });
  };

  const blockingUser = (data) => {
    setLoading(true);
    userID.current = data.id;
    let newBlock = !data.blocked;

    const blocked = {
      blocked: newBlock,
    };

    console.log(newBlock);

    axios
      .put(`${API}/users/${userID.current}`, blocked, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        if (newBlock) {
          SUCCESS("Successfully blocked");
        } else {
          SUCCESS("Successfully unblocked");
        }
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      })
      .finally(() => {
        setLoading(false);
        getUsers();
      });
  };

  const updateUser = async () => {
    setLoading(true);

    const userData = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      role: parseInt(userRole),
    };

    console.log(userData);
    await axios
      .put(`${API}/users/${userID.current}`, userData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        console.log(data);
        SUCCESS("Successfully updated");
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      })
      .finally(() => {
        setLoading(false);
        getUsers();
      });
  };

  useEffect(() => {
    getUsers();
    getRoles();
  }, []);

  return (
    <div className="min-h-screen mt-24 overflow-x-scroll">
      <ToastContainer />
      <div className="overflow-x-auto w-full">
        {loading ? (
          <progress className="progress progress-primary w-full"></progress>
        ) : (
          ""
        )}
        <table className="table w-full z-0">
          <thead>
            <tr>
              <th></th>
              <th>Fullname</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Blocked</th>
              <th> Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>
                    {!loading || user.id !== userID.current ? <div className="flex items-center space-x-3">
                      <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
                          <span className="text-3xl">
                            {user.firstname?.slice(0, 1)?.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>:

                    <div className="d-flex justify-content-center">
                      <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                      </div>
                    </div>}
                  </td>
                  <td>
                    {user.firstname} {user.lastname}
                    <br />
                    {/*
                    {mov.attributes.genres.data.map((genre) => (
                      <span
                        key={genre.id}
                        className="badge badge-ghost badge-sm"
                      >
                        sdfasd
                      </span>
                    ))} */}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role.name}</td>
                  <td>
                    <button
                      className={
                        user.blocked
                          ? "btn btn-outline btn-success btn-xs"
                          : "btn btn-outline btn-warning btn-xs"
                      }
                      onClick={() => blockingUser(user)}
                    >
                      {user.blocked ? "Unblock" : "Block"}
                    </button>
                  </td>
                  <th>
                    <div className="space-x-3">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-success btn-xs"
                        onClick={() => getSelected(user)}
                      >
                        Edit
                      </label>
                      <label
                        htmlFor="my-modal-4"
                        className="btn btn-error btn-xs"
                        onClick={() => getSelected(user)}
                      >
                        Delete
                      </label>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* edit modal */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit user profile</h3>
          <div className="py-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Firstname</span>
              </label>
              <label className="input-group">
                <span>
                  <BiRename />
                </span>
                <input
                  type="text"
                  placeholder="Firstname"
                  className="input input-bordered w-full"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Lastname</span>
              </label>
              <label className="input-group">
                <span>
                  <BiRename />
                </span>
                <input
                  type="text"
                  placeholder="Lastname"
                  className="input input-bordered w-full"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <label className="input-group">
                <span>
                  <BiRename />
                </span>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <span>
                  <MdEmail />
                </span>
                <input
                  type="email"
                  placeholder="e.g joe@me.com"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <label className="input-group">
                <span>
                  <GiPlayerNext />
                </span>
                <select
                  defaultValue={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  className="select select-primary w-full max-w-xs"
                >
                  <option disabled>Select your role</option>
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name?.toUpperCase()}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex justify-end mt-8">
              <button className="btn btn-primary" onClick={updateUser}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Are you sure you want to delete?
          </h3>
          <div className="py-4">
<<<<<<< HEAD:frontend/src/components/users/users.jsx
            <button className="btn btn-error" onClick={deleteUser}>
              Delete
            </button>
=======
            <label
              className="btn btn-error"
              htmlFor="my-modal-4"
              onClick={deleteUser}
            >
              Delete
            </label>
>>>>>>> d1fc4871ff931d2b9599706ef71711ab8bb6a311:frontend/src/components/Admin/users/users.jsx
            <h1 className="mt-4 text-green-500">
              Click outside the card to cancel
            </h1>
          </div>
        </label>
      </label>
    </div>
  );
}

export default Users;
