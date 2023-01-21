import React, { useState, useRef, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { BiMoviePlay } from "react-icons/bi";
import jwt_decode from "jwt-decode";
import { API, TOKEN } from "../../environment/constant";
import axios from "axios";
import moment from "moment";

function Snacks() {
  const [loading, setLoading] = useState(false);
  const cinemaID = useRef();
  const [snacks, setSnacks] = useState([]);

  const token = localStorage.getItem("jwt");
  let decoded = jwt_decode(token);
  let ID = decoded.id;

  // get user for the cinema
  const getUser = async () => {
    await axios
      .get(`${API}/users/${ID}?populate=*`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        console.log(data.data);
        cinemaID.current = data.data?.cinema.id;
        getSnacks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSnacks = async () => {
    setLoading(true);
    await axios
      .get(
        `${API}/cinema-snacks?filters[cinema]=${cinemaID.current}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((snac) => {
        console.log(snac.data.data);
        setSnacks(snac.data.data);
        // getMovies();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="min-h-screen mt-24 overflow-x-scroll">
      <ToastContainer />
      <label htmlFor="my-modal-7" className="btn btn-primary gap-2">
        <BiMoviePlay style={{ fontSize: "1.5rem" }} />
        Add snacks
      </label>
      <h1 className="text-center font-bold text-3xl mb-4">Snacks</h1>
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
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Created at</th>
              <th>Updated at</th>
              <th> Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {snacks.map((snack) => {
              return (
                <tr key={snack.id}>
                  <td>
                    {!loading ? (
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <label
                                className="cursor-pointer"
                                htmlFor="my-modal-8"
                                // onClick={() => selectedEdit(mov)}
                              >
                                <img
                                  src={snack.attributes.movieImage}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-center">
                        <div className="spinner">
                          <div className="bounce1"></div>
                          <div className="bounce2"></div>
                          <div className="bounce3"></div>
                        </div>
                      </div>
                    )}
                  </td>
                  <td>
                    {snack.attributes.name}
                  </td>
                  <td>
                    {'R' + snack.attributes.price}
                  </td>
                  <td>{snack.attributes.quantity}</td>
                  <td>
                    {moment(snack.attributes.createdAt).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </td>
                  <td>
                    {moment(snack.attributes.updatedAt).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </td>
                  <th>
                    <div className="space-x-3">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-success btn-xs"
                        // onClick={() => selectedEdit(mov)}
                      >
                        Edit
                      </label>
                      <label
                        htmlFor="my-modal-4"
                        className="btn btn-error btn-xs"
                        // onClick={() => selectedEdit(mov)}
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
    </div>
  );
}

export default Snacks;
