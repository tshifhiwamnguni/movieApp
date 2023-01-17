import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { API, TOKEN } from "../environment/constant";
import { ERROR } from "../environment/toast";
import "./allmov.css";
import { MdAddAPhoto } from "react-icons/md";
import { BiRename } from "react-icons/bi";
import jwt_decode from "jwt-decode";

function Allmovies() {
    let ID;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState();
  const [moviePoster, setMoviePoster] = useState();
  const [title, setTitle] = useState();
  const [userI, setUserId] = useState(0);


  const token = localStorage.getItem("jwt");
  //   get movies
  const movie = () => {
    setLoading(true);

    axios
      .get(`${API}/movies?populate=*`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        setMovies(res.data.data);
        console.log(res.data.data[0].attributes.cinema.data.attributes.name);
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //   get cinemas
  const getCinema = () => {
    axios
      .get(`${API}/cinemas`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        setCinemas(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //   get selected on the table
  const handleSelected = (data) => {
    setSelectedData(data);
    {setTitle(data.attributes.title)}
    console.log(title)
    console.log(data.attributes);
  };

  useEffect(() => {
    let decoded = jwt_decode(token);
    ID = decoded.id;
    setUserId(ID);
    movie();
    getCinema();
  }, []);

  const fileInput = useRef(null);

  //   show file dialog
  const handleClick = () => {
    fileInput.current.click();
  };

  //   get selected cinema ID
  const selectCinema = (e) => {
    setSelectedCinema(e.target.value);
    console.log(e.target.value);
  };

  //   get the picture

  const handleChange = (event) => {
    console.log(event.target.files[0]);
    setMoviePoster(event.target.files[0]);
  };

  //   update the movie
  const updateMovie = (e) => {
      e.preventDefault();
    const movieData ={
        title: title,
        movieImage: moviePoster,
        cinema: selectedCinema
    }

    console.log(movieData);

    axios.put(`${API}/movies/${userI}`, movieData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error)
    })
  };

  return (
    <div className=" min-h-screen z-0 mt-24">
      <div className="flex justify-center">
        {loading ? (
          <div className="loader">
            <div className="loadings"></div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name & Genre</th>
              <th>Duration</th>
              <th>Cinema</th>
              <th>Bookings</th>
              <th>Action</th>
            </tr>
          </thead>

          {movies.map((data) => {
            return (
              <tbody>
                <tr key={data.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={data.attributes.movieImage.data.attributes.url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {data.attributes.title}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      <ul className="flex gap-2">
                        {data.attributes.genres.data.map((item, index) => (
                          <li key={index}>{item.attributes.name}</li>
                        ))}
                      </ul>
                    </span>
                  </td>
                  <td>
                    <div>
                      {Math.floor(data.attributes.duration / 60) +
                        "h:" +
                        (
                          Math.round((data.attributes.duration % 60) * 100) /
                          100
                        ).toFixed(0) +
                        "m"}
                    </div>
                  </td>
                  <td>{data.attributes.cinema.data.attributes.name}</td>
                  <td>{data.attributes.booking_cinemas.data.length}</td>
                  <th className="flex gap-2">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-success btn-xs"
                      onClick={() => handleSelected(data)}
                    >
                      Edit
                    </label>
                    <button className="btn btn-error btn-xs">Delete</button>
                  </th>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>

      {/* modal for edit */}
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
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full">
                <img
                  src={selectedData?.attributes.movieImage.data.attributes.url}
                />
              </div>
              <span className="flex justify-center add" onClick={handleClick}>
                <MdAddAPhoto />
              </span>
            </div>
            <input
              ref={fileInput}
              type="file"
              style={{ display: "none" }}
              onChange={handleChange}
            />

            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <label className="input-group">
                <span>
                  <BiRename />
                </span>
                <input
                  type="text"
                  value={title}
                  placeholder="Title"
                  onChange={(e)=>setTitle(e.target.value)}
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
                  <BiRename />
                </span>
                <select
                  value={selectedCinema}
                  onChange={selectCinema}
                  className="select select-primary w-full max-w-xs"
                >
                  <option disabled selected>
                    Selected the cinema
                  </option>
                  {cinemas.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.attributes.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <button className="btn btn-success" onClick={updateMovie}>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allmovies;
