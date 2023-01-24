import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { API, TOKEN } from "../../environment/constant";
import "./Allmov.css";
import moment from "moment";
import { BiRename } from "react-icons/bi";
import { TbFileDescription } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";
import { ERROR, SUCCESS } from "../../environment/toast";
import { ToastContainer } from "react-toastify";
import { RiVideoAddFill } from "react-icons/ri";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState("");
  const [cinemaId, setCinemaId] = useState();
  const [image, setImage] = useState("");
  const [cinemas, setCinemas] = useState([]);
  const movieId = useRef();
  const [movID, setMovId] = useState();
  const movieFile = useRef();
  const imgUrl = useRef();

  const getMovies = async () => {
    setLoading(true);
    await axios
      .get(`${API}/movies?populate=*`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((movie) => {
        console.log(movie.data.data[1]);
        setMovies(movie.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  function getCinema() {
    axios
      .get(`${API}/cinemas`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((cinema) => {
        console.log(cinema.data.data);
        setCinemas(cinema.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function selectedEdit(mov) {
    console.log(mov.id);
    setTitle(mov.attributes.title);
    setDuration(mov.attributes.duration);
    setDescription(mov.attributes.description);
    setCinemaId(mov.attributes.cinema.data.id);
    setImage(mov.attributes.movieImage);
    movieId.current = mov.id;
    setMovId(mov.id);
  }

  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = (e) => {
      const file = e.target.files[0];
      movieFile.current = file;
      console.log(movieFile.current);
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    };

    input.click();
  };

  const updateMovie = () => {
    setLoading(true);

    const movieData = {
      data: {
        title: title,
        description: description,
        movieImage: image,
        duration: duration,
        cinema: parseInt(cinemaId),
      },
    };
    console.log(movieId);

    axios
      .put(`${API}/movies/${movieId.current}?populate=*`, movieData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        console.log(data);
        SUCCESS("Successfully updated");
      })
      .catch((error) => {
        console.log(error);
        ERROR(error.response.data.error.message);
      })
      .finally(() => {
        setLoading(false);
        getMovies();
      });
  };

  const deleteMovie = async () => {
    setLoading(true);
    await axios
      .delete(`${API}/movies/${movieId.current}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        console.log(data);
        SUCCESS("Successfully deleted");
      })
      .catch((error) => {
        console.log(error);
        ERROR(error.response.data.error.message);
      })
      .finally(() => setLoading(false));
  };

  const uploadMoviePoster = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    console.log(movID);
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
        console.log(data.data[0].url);
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
            console.log(data);
            SUCCESS("Successfully updated");
          })
          .catch((error) => {
            ERROR(error.response.data.error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        ERROR(error.response.data.error.message);
      })
      .finally(() => {
        setLoading(false);
        getMovies();
      });
  };

  useEffect(() => {
    getMovies();
    getCinema();
  }, []);

  return (
    <div className="min-h-screen mt-24 overflow-x-scroll">
      <ToastContainer />
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
              <th>Created at</th>
              <th>Updated at</th>
              {/* <th> Action</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((mov) => {
              return (
                <tr key={mov.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={mov.attributes.movieImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {mov.attributes.title}
                    <br />

                    {mov.attributes.genres.data.map((genre) => (
                      <span
                        key={genre.id}
                        className="badge badge-ghost badge-sm"
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
                  <td>{mov.attributes.cinema.data.attributes.name}</td>
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
                  {/* <th>
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
                    </div>
                  </th> */}
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
                <span className="label-text">Cinema</span>
              </label>
              <label className="input-group">
                <span>
                  <TbFileDescription />
                </span>
                <select
                  defaultValue={cinemaId}
                  onChange={(e) => setCinemaId(e.target.value)}
                  className="select select-bordered max-w-lg"
                >
                  <option disabled>Pick a cinema</option>
                  {cinemas.map((cin) => (
                    <option key={cin.id} value={cin.id}>
                      {cin.attributes.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex justify-end mt-3">
              <button className="btn btn-success" onClick={updateMovie}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* delete modal */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Are you sure you want to delete {title}?
          </h3>
          <div className="py-4">
            <button className="btn btn-error" onClick={deleteMovie}>
              Delete
            </button>
            <h1 className="mt-4 text-green-500">
              Click outside the card to cancel
            </h1>
          </div>
        </label>
      </label>
    </div>
  );
}

export default AllMovies;
