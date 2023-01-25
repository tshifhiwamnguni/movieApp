import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { API, TOKEN } from "../../environment/constant";
import "./movies.css";
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

function CinMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const movieId = useRef();
  const movieFile = useRef();
  const imgUrl = useRef();
  const cinemaID = useRef();
  const [cinemaName, setCinemaName] = useState("");
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

  // get user for the cinema
  const getUser = async () => {
    await axios
      .get(`${API}/users/${ID}?populate=*`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then(async (data) => {
        cinemaID.current = data.data?.cinema.id;
        getMovies();
        getPages();
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

  //   request for page change
  useEffect(() => {
    getMovies();
  }, [page]);

  //   get pages
  const getPages = async () => {
    await axios
      .get(
        `${API}/movies?populate=*&filters[cinema]=${cinemaID.current}&pagination[pageSize]=5`
      )
      .then((rev) => {
        console.log(rev.data.meta.pagination);
        setPageCount(rev.data.meta.pagination.pageCount);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // get movies per cinema
  const getMovies = async () => {
    setLoading(true);
    await axios
      .get(
        `${API}/movies?filters[cinema]=${cinemaID.current}&populate=*&pagination[pageSize]=5&pagination[page]=${page}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((movie) => {
        // console.log(movie.data);
        setMovies(movie.data.data);
        setCinemaName(
          movie.data.data[0].attributes.cinema.data.attributes.name
        );
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
  };

  // get and set selected data to the variables
  function selectedEdit(mov) {
    setTitle(mov.attributes.title);
    setDuration(mov.attributes.duration);
    setDescription(mov.attributes.description);
    setImage(mov.attributes.movieImage);
    setPrice(mov.attributes.price);
    movieId.current = mov.id;
  }

  // get image when you click
  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = (e) => {
      const file = e.target.files[0];
      movieFile.current = file;
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    };

    input.click();
  };

  // updating movie data
  const updateMovie = () => {
    setLoading(true);

    const movieData = {
      data: {
        title: title,
        description: description,
        duration: duration,
        cinema: parseInt(cinemaID.current),
        genres: selectedOptions,
        price: price,
      },
    };

    axios
      .put(`${API}/movies/${movieId.current}?populate=*`, movieData, {
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
        getMovies();

        setTitle("");
        setDescription("");
        setImage("");
        setDuration(0);
        movieId.current = null;
      });
  };

  // delete a movie
  const deleteMovie = async () => {
    setLoading(true);
    await axios
      .delete(`${API}/movies/${movieId.current}`, {
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
        getMovies();
      });
  };

  // update a movie image
  const uploadMoviePoster = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("files", movieFile.current);
    formData.append("refID", movieId.current);
    formData.append("field", "movieImage");
    formData.append("ref", "api::movie.movie");

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
            `${API}/movies/${movieId.current}?populate=*`,
            { data: { movieImage: imgUrl.current } },
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
            getMovies();

            setTitle("");
            setDescription("");
            setImage("");
            setDuration(0);
            setGenres([]);
            setPrice(0);
            movieId.current = null;
          });
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      });
  };

  // add a movie with image
  const addMovies = async () => {
    setLoading(true);

    const movieData = {
      data: {
        title: title,
        description: description,
        duration: duration,
        cinema: parseInt(cinemaID.current),
        genres: selectedOptions,
        price: price,
      },
    };

    await axios
      .post(`${API}/movies?populate=*`, movieData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((mov) => {
        movieId.current = mov.data.data.id;
      })
      .catch((error) => {
        console.log(error);
        ERROR(error.response.data.error.message);
      });

    const formData = new FormData();
    formData.append("files", movieFile.current);
    formData.append("refID", movieId.current);
    formData.append("field", "movieImage");
    formData.append("ref", "api::movie.movie");
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
        `${API}/movies/${movieId.current}?populate=*`,
        { data: { movieImage: imgUrl.current } },
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
        getMovies();

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

  //   const filteredItems = movies.filter(mov=>{
  //      return mov.attributes.title.toLowerCase().includes(query.toLowerCase())
  //   })

  useEffect(() => {
    setLoading(true);
    if(query){
    axios
      .get(
        `${API}/movies?filters[cinema]=${cinemaID.current}&populate=*&pagination[pageSize]=5&pagination[page]=${page}&filters[title][$containsi]=${query}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((movie) => {
        // console.log(movie.data);
        setMovies(movie.data.data);
        setCinemaName(
          movie.data.data[0].attributes.cinema.data.attributes.name
        );
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
    }else{
        getMovies();
    }
  }, [query]);

  return (
    <div className="min-h-screen mt-24 overflow-x-scroll">
      <ToastContainer />
      <div className="flex">
        <label htmlFor="my-modal-7" className="btn btn-primary gap-2">
          <BiMoviePlay style={{ fontSize: "1.5rem" }} />
          Add movies
        </label>
        <div className="form-control flex-1">
          <div className="input-group justify-end">
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
      <h1 className="text-center font-bold text-3xl mb-4">Movies</h1>
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
              <th>Cinema</th>
              <th>Price</th>
              <th>Created at</th>
              <th>Updated at</th>
              <th> Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((mov) => {
              return (
                <tr key={mov.id}>
                  <td>
                    {!loading || mov.id !== movieId.current ? (
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <label
                                className="cursor-pointer"
                                htmlFor="my-modal-8"
                                onClick={() => selectedEdit(mov)}
                              >
                                <img
                                  src={mov.attributes.movieImage}
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
                    {mov.attributes.title}
                    <br />

                    {mov.attributes.genres?.data.map((genre) => (
                      <span
                        key={genre.id}
                        className="badge badge-ghost badge-sm ml-1"
                      >
                        {genre.attributes.name}
                      </span>
                    ))}
                  </td>
                  <td>
                    {Math.floor(mov.attributes.duration / 60) +
                      "h:" +
                      (
                        Math.round((mov.attributes.duration % 60) * 100) / 100
                      ).toFixed(0)}
                  </td>
                  <td>{cinemaName}</td>
                  <td>{"R" + mov.attributes.price}</td>
                  <td>
                    {moment(mov.attributes.createdAt).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </td>
                  <td>
                    {moment(mov.attributes.updatedAt).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </td>
                  <th>
                    <div className="space-x-3">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-success btn-xs"
                        onClick={() => selectedEdit(mov)}
                      >
                        Edit
                      </label>
                      <label
                        htmlFor="my-modal-4"
                        className="btn btn-error btn-xs"
                        onClick={() => selectedEdit(mov)}
                      >
                        Delete
                      </label>

                      <label
                        htmlFor="my-modal-11"
                        className="btn btn-success btn-xs"
                        onClick={() =>
                          navigate("/cinema/review/" + mov.id, {
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
          <h3 className="text-lg font-bold">Edit movie</h3>
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
                onClick={uploadMoviePoster}
              >
                Upload
              </button>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Movie title</span>
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
                <span className="label-text">Movie Description</span>
              </label>
              <label className="input-group">
                <span>
                  <TbFileDescription />
                </span>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the movie"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Movie Duration in minutes</span>
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
                <span className="label-text">Movie Price</span>
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
                <span className="label-text">Movie genres</span>
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
                onClick={updateMovie}
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
              onClick={deleteMovie}
            >
              Delete
            </label>
            {/* <h1 className="mt-4 text-green-500">
              Click outside the card to cancel
            </h1> */}
          </div>
        </label>
      </label>

      {/* add movies */}

      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-7"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add movie</h3>
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
            {/* <div className="flex justify-center mt-2">
              <button
                className="btn btn-success btn-xs"
                onClick={uploadMoviePoster}
              >
                Upload
              </button>
            </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Movie title</span>
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
                <span className="label-text">Movie Description</span>
              </label>
              <label className="input-group">
                <span>
                  <TbFileDescription />
                </span>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the movie"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Movie Duration in minutes</span>
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
                <span className="label-text">Movie Price</span>
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
                <span className="label-text">Movie genres</span>
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
                onClick={addMovies}
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
            <label htmlFor="my-modal-8" className="btn">
              Done
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinMovies;
