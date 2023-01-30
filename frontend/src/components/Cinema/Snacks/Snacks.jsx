import React, { useState, useRef, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { BiMoviePlay } from "react-icons/bi";
import jwt_decode from "jwt-decode";
import { API, TOKEN } from "../../environment/constant";
import axios from "axios";
import moment from "moment";
import './snacks.css'
import { useNavigate } from "react-router-dom";

import { BiRename } from "react-icons/bi";
import { TbFileDescription } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";
import { ERROR, SUCCESS } from "../../environment/toast";

function Snacks() {
  const [loading, setLoading] = useState(false);
  const cinemaID = useRef();
  const snackID = useRef();
  const [snacks, setSnacks] = useState([]);
  const [snackName, setSnackName] = useState("");
  const [snackPrice, setSnackPrice] = useState(0);
  const [snackQuantity, setSnackQuantity] = useState(0);
  const [snacksSize, setSnackSize] = useState("");
  const [image, setImage] = useState();
  const snackImageUrl = useRef("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const navigate = useNavigate(); 

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
        if(data.data.role.id !== 5){
            navigate('/home', {replace: true})
          }
        cinemaID.current = data.data?.cinema.id;
        getSnacks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // get and set selected data to the variables
  function selectedEdit(snc) {
    setSnackName(snc.attributes.name);
    setSnackPrice(snc.attributes.price);
    setSnackQuantity(snc.attributes.quantity);
    setImage(snc.attributes.snackImage);
    snackID.current = snc.id;
  }

  // delete a snacks
  const deleteSnack = async () => {
    setLoading(true);
    await axios
      .delete(`${API}/cinema-snacks/${snackID.current}`, {
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
        getSnacks();
      });
  };

  // get image when you click
  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = (e) => {
      const file = e.target.files[0];
      snackImageUrl.current = file;
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    };

    input.click();
  };

  // update a movie image
  const uploadSnackImage = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("files", snackImageUrl.current);
    formData.append("refID", snackID.current);
    formData.append("field", "movieImage");
    formData.append("ref", "api::cinema-snack.cinema-snack");

    await axios
      .post(`${API}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        snackImageUrl.current = data.data[0].url;
        SUCCESS("Successfully uploaded");
        axios
          .put(
            `${API}/cinema-snacks/${snackID.current}?populate=*`,
            { data: { snackImage: snackImageUrl.current } },
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
            // console.log(error)
          })
          .finally(() => {
            setLoading(false);
            getSnacks();

            setSnackName("");
            setSnackPrice(0);
            setSnackQuantity(0);
            setSnackPrice("");
            setSnackSize("");
            // snackID.current = null;
          });
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      });
  };

  // add snacks
  const addSnack = async () => {
    setLoading(true);

    const snackData = {
      data: {
        name: snackName,
        price: snackPrice,
        quantity: snackQuantity,
        snackSize: snacksSize,
        cinema: parseInt(cinemaID.current),
      },
    };

    await axios
      .post(`${API}/cinema-snacks?populate=*`, snackData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((snac) => {
        snackID.current = snac.data.data.id;
      })
      .catch((error) => {
        console.log(error);
        ERROR(error.response.data.error.message);
      });

    const formData = new FormData();
    formData.append("files", snackImageUrl.current);
    formData.append("refID", snackID.current);
    formData.append("field", "movieImage");
    formData.append("ref", "api::cinema-snack.cinema-snack");
    await axios
      .post(`${API}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        snackImageUrl.current = data.data[0].url;
        // console.log(data.data[0].url)
        SUCCESS("Successfully added");
      })
      .catch((error) => {
        // console.log(error);
        ERROR(error.response.data.error.message);
      });

    axios
      .put(
        `${API}/cinema-snacks/${snackID.current}?populate=*`,
        { data: { snackImage: snackImageUrl.current } },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((data) => {
        // console.log(data);
        // SUCCESS("Successfully added");
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        getSnacks();

        setSnackName("");
        setSnackPrice(0);
        setSnackQuantity(0);
        setSnackPrice("");
        setSnackSize("");
      });
  };

  // updating snacks data
  const updateSnack = () => {
    setLoading(true);

    const snackData = {
      data: {
        name: snackName,
        price: snackPrice,
        quantity: snackQuantity,
        snackSize: snacksSize,
      },
    };

    console.log(snackData);
    axios
      .put(`${API}/cinema-snacks/${snackID.current}?populate=*`, snackData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        SUCCESS("Successfully updated");
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      })
      .finally(() => {
        setLoading(false);
        getSnacks();

        setSnackName("");
        setSnackPrice(0);
        setSnackQuantity(0);
        setSnackPrice("");
        setSnackSize("");
        snackID.current = null;
      });
  };
  // get snacks by a cinemaid
  const getSnacks = async () => {
    setLoading(true);
    await axios
      .get(
        `${API}/cinema-snacks?filters[cinema]=${cinemaID.current}&populate=*&pagination[pageSize]=5&pagination[page]=${page}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((snac) => {
        // console.log(snac.data.data);
        setSnacks(snac.data.data);
        setPageCount(snac.data.meta.pagination.pageCount);
        // getMovies();
      })
      .catch((err) => {
        // console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getUser();
  }, []);


//   search useeffect
  useEffect(() => {
    setLoading(true);
    if(query){
    axios
      .get(
        `${API}/cinema-snacks?filters[cinema]=${cinemaID.current}&populate=*&filters[name][$containsi]=${query}&pagination[pageSize]=5&pagination[page]=${page}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((movie) => {
        setSnacks(movie.data.data);
        // console.log(movie.data)
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
    }else{
        getSnacks();
    }
  }, [query]);

    //   change page number
    async function handleNextPage() {
        setPage(page + 1);
      }
    
      async function handlePreviousPage() {
        setPage(page - 1);
      }
    
      //   request for page change
      useEffect(() => {
        getSnacks();
      }, [page]);

  const snackSize = [
    { value: "small", name: "Small" },
    { value: "Medium", name: "Medium" },
    { value: "large", name: "Large" },
    { value: "extra-large", name: "Extra-large" },
    { value: "extra-extra-large", name: "XX-large" },
  ];

  return (
    <div className="min-h-screen mt-24 overflow-x-scroll">
      <ToastContainer />
      <div className="flex xs:flex-col md:gap-3 xs:gap-3">
      <label htmlFor="my-modal-8" className="btn btn-primary gap-2">
        <BiMoviePlay style={{ fontSize: "1.5rem" }} />
        Add snacks
      </label>
      <div className="form-control lg:flex-1 md:flex-1">
          <div className="input-group justify-end sm:justify-end">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        </div>
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
              <th>Size</th>
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
                    {!loading || snack.id !== snackID.current ? (
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <label
                                className="cursor-pointer"
                                htmlFor="my-modal-6"
                                onClick={() => selectedEdit(snack)}
                              >
                                <img
                                  src={snack.attributes.snackImage}
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
                  <td>{snack.attributes.name}</td>
                  <td>{"R" + snack.attributes.price}</td>
                  <td>{snack.attributes.quantity}</td>
                  <td>{snack.attributes.snackSize}</td>
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
                        onClick={() => selectedEdit(snack)}
                      >
                        Edit
                      </label>
                      <label
                        htmlFor="my-modal-4"
                        className="btn btn-error btn-xs"
                        onClick={() => selectedEdit(snack)}
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

      <hr />
        <div className="flex gap-3 justify-center mt-3">
          <button
            className="btn btn-primary glass"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className="btn btn-primary glass"
            onClick={handleNextPage}
            disabled={page === pageCount}
          >
            Next
          </button>
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
          <h3 className="text-lg font-bold">Edit snack</h3>
          <div className="py-4">
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
                onClick={uploadSnackImage}
              >
                Upload
              </button>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Snack name</span>
              </label>
              <label className="input-group">
                <span>
                  <BiRename />
                </span>
                <input
                  type="text"
                  placeholder="Hola-hola"
                  onChange={(e) => setSnackName(e.target.value)}
                  value={snackName}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Snack price</span>
              </label>
              <label className="input-group">
                <span>
                  <TbFileDescription />
                </span>
                <input
                  type="number"
                  value={snackPrice}
                  onChange={(e) => setSnackPrice(e.target.value)}
                  placeholder="e.g. 20"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Snack quantity</span>
              </label>
              <label className="input-group">
                <span>
                  <IoMdTime />
                </span>
                <input
                  type="number"
                  value={snackQuantity}
                  onChange={(e) => setSnackQuantity(e.target.value)}
                  placeholder="e.g 120"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Snack size</span>
              </label>
              <label className="input-group">
                <span>
                  <IoMdTime />
                </span>
                <select
                  onChange={(e) => setSnackSize(e.target.value)}
                  className="select select-info w-full max-w-xs"
                >
                  {snackSize.map((snack) => {
                    return <option key={snack.value} value={snack.value}>{snack.name}</option>;
                  })}
                </select>
              </label>
            </div>

            <div className="flex justify-end mt-3">
              <label
                className="btn btn-success"
                htmlFor="my-modal-3"
                onClick={updateSnack}
              >
                Update
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Add modal */}
      <input type="checkbox" id="my-modal-8" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-8"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add snacks</h3>
          <div className="py-4">
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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Snack name</span>
              </label>
              <label className="input-group">
                <span>
                  <BiRename />
                </span>
                <input
                  type="text"
                  placeholder="Hola-hola"
                  onChange={(e) => setSnackName(e.target.value)}
                  value={snackName}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Snack price</span>
              </label>
              <label className="input-group">
                <span>
                  <TbFileDescription />
                </span>
                <input
                  type="number"
                  value={snackPrice}
                  onChange={(e) => setSnackPrice(e.target.value)}
                  placeholder="e.g. 20"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Snack quantity</span>
              </label>
              <label className="input-group">
                <span>
                  <IoMdTime />
                </span>
                <input
                  type="number"
                  value={snackQuantity}
                  onChange={(e) => setSnackQuantity(e.target.value)}
                  placeholder="e.g 120"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Snack size</span>
              </label>
              <label className="input-group">
                <span>
                  <IoMdTime />
                </span>
                <select
                  onChange={(e) => setSnackSize(e.target.value)}
                  className="select select-info w-full max-w-xs"
                >
                  <option disabled selected>
                    Select snack size
                  </option>
                  {snackSize.map((snack) => {
                    return <option key={snack.value} value={snack.value}>{snack.name}</option>;
                  })}
                </select>
              </label>
            </div>

            <div className="flex justify-end mt-3">
              <label
                className="btn btn-success"
                htmlFor="my-modal-8"
                onClick={addSnack}
              >
                ADD
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* delete modal */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Are you sure you want to delete {snackName}?
          </h3>
          <div className="py-4">
            <label
              className="btn btn-error"
              htmlFor="my-modal-4"
              onClick={deleteSnack}
            >
              Delete
            </label>
            {/* <h1 className="mt-4 text-green-500">
              Click outside the card to cancel
            </h1> */}
          </div>
        </label>
      </label>

      
{/* view image */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex justify-center">
            <img src={image} alt="nice" />
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Done
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snacks;
