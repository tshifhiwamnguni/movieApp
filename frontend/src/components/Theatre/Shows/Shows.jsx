import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { API, TOKEN } from "../../environment/constant";
import "./shows.css";
import moment from "moment";
import { BiRename } from "react-icons/bi";
import { TbFileDescription } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";
import { ERROR, SUCCESS } from "../../environment/toast";
import { ToastContainer } from "react-toastify";
import { BiMoviePlay } from "react-icons/bi";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Shows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const showId = useRef();
  const showFile = useRef();
  const imgUrl = useRef();
  const theatreID = useRef();
  const [theatreName, setTheatreName] = useState("");
  const [genre, setGenres] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [price, setPrice] = useState(0);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // checkbox for genres
  const handleCheckboxChange = async (event) => {
    const selectedValue = event.target.value;

    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, parseInt(selectedValue)]);
    } else {
      setSelectedOptions(
        selectedOptions.filter((value) => value !== parseInt(selectedValue))
      );
    }
  };

  // use effect for the selected options of a checkbox
  useEffect(() => {}, [selectedOptions]);

  const token = localStorage.getItem("jwt");
  let decoded = jwt_decode(token);
  let ID = decoded.id;

  // get user for the theatre
  const getUser = async () => {
    await axios
      .get(`${API}/users/${ID}?populate=*`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        if(data.data.role.id !== 6){
          navigate('/home', {replace: true})
        }
        theatreID.current = data.data.theatre.id;
        getShows();
      })
      .catch((err) => {});
  };

  // get genres
  const getGenres = async () => {
    await axios
      .get(`${API}/genres`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        setGenres(data.data.data);
      })
      .catch((error) => {});
  };

  //   change page number
  async function handleNextPage() {
    setPage(page + 1);
  }

  async function handlePreviousPage() {
    setPage(page - 1);
  }

  // get shows per theatre
  const getShows = async () => {
    setLoading(true);
    await axios
      .get(
        `${API}/shows?filters[theatre]=${theatreID.current}&populate=*&pagination[pageSize]=5&pagination[page]=${page}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((show) => {
        console.log(show.data);
        setPageCount(show.data.meta.pagination.pageCount);
        setShows(show.data.data);
        setTheatreName(
          show.data.data[0].attributes.theatre.data.attributes.name
        );
        setSelectedOptions([
          ...selectedOptions,
          parseInt(show.data.data.attributes.genres.data),
        ]);
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
  };

  // clear seleted
  let hold = [];
  const clearData = () => {
    setTitle("");
    setDuration("");
    setDescription("");
    setImage("");
    setPrice(0);

    hold = [];
    setSelectedOptions([]);
  };

  // get and set selected data to the variables
  function selectedEdit(theatre) {
    setTitle(theatre.attributes.title);
    setDuration(theatre.attributes.duration);
    setDescription(theatre.attributes.description);
    setImage(theatre.attributes.showImage);
    setPrice(theatre.attributes.price);

    theatre.attributes.genres.data?.map((g) => {
      hold.push(g.id);
    });
    setSelectedOptions([...selectedOptions, ...hold]);

    showId.current = theatre.id;
  }

  // get image when you click
  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = (e) => {
      const file = e.target.files[0];
      showFile.current = file;
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    };

    input.click();
  };

  // updating show data
  const updateShow = () => {
    setLoading(true);

    console.log(selectedOptions);
    const showData = {
      data: {
        title: title,
        description: description,
        duration: duration,
        theatre: parseInt(theatreID.current),
        genres: selectedOptions,
        price: price,
      },
    };

    axios
      .put(`${API}/shows/${showId.current}?populate=*`, showData, {
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
        getShows();

        setTitle("");
        setDescription("");
        setImage("");
        setDuration(0);
        setSelectedOptions([]);
        showId.current = null;
      });
  };

  // delete a show
  const deleteShow = async () => {
    setLoading(true);
    await axios
      .delete(`${API}/shows/${showId.current}`, {
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
        getShows();
      });
  };

  // update a show image
  const uploadShowPoster = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("files", showFile.current);
    formData.append("refID", showId.current);
    formData.append("field", "showImage");
    formData.append("ref", "api::show.show");

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
            `${API}/shows/${showId.current}?populate=*`,
            { data: { showImage: imgUrl.current } },
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
            getShows();

            setTitle("");
            setDescription("");
            setImage("");
            setDuration(0);
            setGenres([]);
            setPrice(0);
            showId.current = null;
          });
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      });
  };

  // add a show with image
  const addShows = async () => {
    setLoading(true);

    const showData = {
      data: {
        title: title,
        description: description,
        duration: duration,
        theatre: parseInt(theatreID.current),
        genres: selectedOptions,
        price: price,
      },
    };

    await axios
      .post(`${API}/shows?populate=*`, showData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((mov) => {
        showId.current = mov.data.data.id;
      })
      .catch((error) => {
        console.log(error);
        ERROR(error.response.data.error.message);
      });

    const formData = new FormData();
    formData.append("files", showFile.current);
    formData.append("refID", showId.current);
    formData.append("field", "showImage");
    formData.append("ref", "api::show.show");
    await axios
      .post(`${API}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then(async (data) => {
        imgUrl.current = data.data[0].url;
        // SUCCESS("Successfully uploaded");
      })
      .catch((error) => {
        // console.log(error);
        ERROR(error.response.data.error.message);
      });

    axios
      .put(
        `${API}/shows/${showId.current}?populate=*`,
        { data: { showImage: imgUrl.current } },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((data) => {
        // console.log(data);
        SUCCESS("Successfully added");
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        getShows();

        setTitle("");
        setDescription("");
        setImage("");
        setDuration(0);
        setGenres([]);
        setPrice(0);
      });
  };

  useEffect(() => {
    getUser();
    getGenres();
  }, []);

  // search function
  async function fetchData() {
    setLoading(true);
    await axios
      .get(
        `${API}/shows?filters[theatre]=${theatreID.current}&populate=*&pagination[pageSize]=5&pagination[page]=${page}&filters[title][$containsi]=${query}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((show) => {
        // console.log(movie.data);
        setShows(show.data.data);
        setTheatreName(
          show.data.data[0].attributes.theatre.data.attributes.name
        );
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
  }
  // search use effect
  useEffect(() => {
    if (query) {
      fetchData();
    } else {
      getShows();
    }
  }, [query, page]);

  return (
    <div className="min-h-screen mt-24 overflow-x-scroll">
      <ToastContainer />
      <div className="flex xs:flex-col md:gap-3 xs:gap-3">
        <label htmlFor="my-modal-7" className="btn btn-primary xs:w-full gap-2">
          <BiMoviePlay style={{ fontSize: "1.5rem" }} />
          Add Shows
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
      <h1 className="text-center font-bold text-3xl mb-4">Shows</h1>
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
              <th>Title & Genre</th>
              <th>Duration</th>
              <th>Theatre</th>
              <th>Price</th>
              <th>Created at</th>
              <th>Updated at</th>
              <th> Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {shows.map((theatre) => {
              return (
                <tr key={theatre.id}>
                  <td>
                    {!loading || theatre.id !== showId.current ? (
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <label
                                className="cursor-pointer"
                                htmlFor="my-modal-8"
                                onClick={() => selectedEdit(theatre)}
                              >
                                <img
                                  src={theatre.attributes.showImage}
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
                    {theatre.attributes.title}
                    <br />

                    {theatre.attributes.genres?.data.map((genre) => (
                      <span
                        key={genre.id}
                        className="badge badge-ghost badge-sm ml-1"
                      >
                        {genre.attributes.name}
                      </span>
                    ))}
                  </td>
                  <td>
                    {Math.floor(theatre.attributes.duration / 60) +
                      "h:" +
                      (
                        Math.round((theatre.attributes.duration % 60) * 100) /
                        100
                      ).toFixed(0)}
                  </td>
                  <td>{theatreName}</td>
                  <td>{"R" + theatre.attributes.price}</td>
                  <td>
                    {moment(theatre.attributes.createdAt).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </td>
                  <td>
                    {moment(theatre.attributes.updatedAt).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </td>
                  <th>
                    <div className="space-x-3">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-success btn-xs"
                        onClick={() => selectedEdit(theatre)}
                      >
                        Edit
                      </label>
                      <label
                        htmlFor="my-modal-4"
                        className="btn btn-error btn-xs"
                        onClick={() => selectedEdit(theatre)}
                      >
                        Delete
                      </label>

                      <label
                        htmlFor="my-modal-11"
                        className="btn btn-success btn-xs"
                        onClick={() =>
                          navigate("/theatre/review/" + theatre.id, {
                            replace: true,
                          })
                        }
                      >
                        View reviews
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
            onClick={clearData}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit show</h3>
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
                onClick={uploadShowPoster}
              >
                Upload
              </button>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Show title</span>
              </label>
              <label className="input-group">
                <span>
                  <BiRename />
                </span>
                <input
                  type="text"
                  placeholder="Avatar"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Show Description</span>
              </label>
              <label className="input-group">
                <span>
                  <TbFileDescription />
                </span>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the show"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Show estimated Duration in minutes
                </span>
              </label>
              <label className="input-group">
                <span>
                  <IoMdTime />
                </span>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g 120"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Show Price</span>
              </label>
              <label className="input-group">
                <span>
                  <IoMdTime />
                </span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g 120"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Show genres</span>
              </label>
              <label className="input-group">
                {genre.map((option) => (
                  <div
                    key={option.id}
                    style={{ backgroundColor: "", padding: "10px" }}
                  >
                    <input
                      type="checkbox"
                      value={option.id}
                      onChange={(e) => handleCheckboxChange(e)}
                      checked={selectedOptions.includes(option.id)}
                      className="checkbox checkbox-primary"
                    />
                    <label>{option.attributes.name}</label>
                  </div>
                ))}
              </label>
            </div>

            <div className="flex justify-end mt-3">
              <label
                className="btn btn-success"
                htmlFor="my-modal-3"
                onClick={updateShow}
              >
                Update
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
            onClick={clearData}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Are you sure you want to delete {title}?
          </h3>
          <div className="py-4">
            <label
              className="btn btn-error"
              htmlFor="my-modal-4"
              onClick={deleteShow}
            >
              Delete
            </label>
            {/* <h1 className="mt-4 text-green-500">
              Click outside the card to cancel
            </h1> */}
          </div>
        </label>
      </label>

      {/* add Shows */}

      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-7"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={clearData}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add show</h3>
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
                <span className="label-text">Show title</span>
              </label>
              <label className="input-group">
                <span>
                  <BiRename />
                </span>
                <input
                  type="text"
                  placeholder="Avatar"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Show Description</span>
              </label>
              <label className="input-group">
                <span>
                  <TbFileDescription />
                </span>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the show"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Show estimated Duration in minutes
                </span>
              </label>
              <label className="input-group">
                <span>
                  <IoMdTime />
                </span>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g 120"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Show Price</span>
              </label>
              <label className="input-group">
                <span>
                  <IoMdTime />
                </span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g 120"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Show genres</span>
              </label>
              <label className="input-group">
                {genre.map((option) => (
                  <div
                    key={option.id}
                    style={{ backgroundColor: "", padding: "10px" }}
                  >
                    <input
                      type="checkbox"
                      value={option.id}
                      onChange={(e) => handleCheckboxChange(e)}
                      checked={selectedOptions.includes(option.id)}
                      className="checkbox checkbox-primary"
                    />
                    <label>{option.attributes.name}</label>
                  </div>
                ))}
              </label>
            </div>

            <div className="flex justify-end mt-3">
              <label
                htmlFor="my-modal-7"
                className="btn btn-success"
                onClick={addShows}
              >
                ADD
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* view image */}
      <input type="checkbox" id="my-modal-8" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex justify-center">
            <img src={image} alt="nice" />
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-8" className="btn" onClick={clearData}>
              Done
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shows;
