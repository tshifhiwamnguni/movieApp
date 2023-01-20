import axios from "axios";
import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { API, TOKEN } from "../../environment/constant";
import { RiMovie2Fill } from "react-icons/ri";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { SUCCESS } from "../../environment/toast";

function CinemaBooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cinemas, setCinemas] = useState([]);
  const [cinemaSeat, setCinemaSeat] = useState([]);
  const [movies, setMovies] = useState([]);
  const [cinemaId, setCinemaId] = useState();
  const [seatId, setSeatId] = useState();
  const [movieId, setMovieId] = useState();
  const bookId = useRef();

  const getBookings = async () => {
    setLoading(true);
    await axios
      .get(`${API}/booking-cinemas?populate=*`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((booking) => {
        console.log(booking.data.data);
        setBookings(booking.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getCinemas = async () => {
    await axios
      .get(`${API}/cinemas`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((allCinema) => {
        // console.log(allCinema.data.data);
        setCinemas(allCinema.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCinemaSeats = async () => {
    await axios
      .get(`${API}/cinema-seats`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((seats) => {
        // console.log(seats.data.data);
        setCinemaSeat(seats.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMovies = async () => {
    await axios
      .get(`${API}/movies`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((movie) => {
        // console.log(movie.data.data);
        setMovies(movie.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSelected = (data) => {
    console.log(data.attributes.cinema.data.id);
    setCinemaId(data.attributes.cinema.data.id);
    setSeatId(data.attributes.cinema_seat.data.id);
    setMovieId(data.attributes.movie.data.id);
    bookId.current = data.id;
  };

  const updateBooking = async () => {
      setLoading(true);
    const data = {
      data: {
        cinema: parseInt(cinemaId),
        cinema_seat: parseInt(seatId),
        movie: parseInt(movieId),
      },
    };

    console.log(data);

    await axios
      .put(`${API}/booking-cinemas/${bookId.current}?populate=*`, data, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        console.log(data.data);
        SUCCESS("Successfully updated");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        window.location.reload();
      });
  };

  const deleteBooking = async () => {
      setLoading(true);
    await axios
      .delete(`${API}/booking-cinemas/${bookId.current}`,{
          headers: {
              Authorization: `Bearer ${TOKEN}`
          }
      })
      .then((data) => {
        console.log(data);
        SUCCESS('Successfully deleted')
      })
      .catch((error) => {
        console.log(error);
      }).finally(()=>{
          setLoading(false);
          window.location.reload();
      });
  };
  useEffect(() => {
    getBookings();
    getCinemas();
    getCinemaSeats();
    getMovies();
  }, []);
  return (
    <div className="min-h-screen mt-24 overflow-x-scroll">
      <ToastContainer />
      <h1 className="text-center font-bold text-3xl mb-4">Cinema booking</h1>
      <div className="overflow-x-auto w-full">
        {loading ? (
          <progress className="progress progress-primary w-full"></progress>
        ) : (
          ""
        )}
        <table className="table w-full z-0">
          <thead>
            <tr>
              <th>Cinema</th>
              <th>Cinema Seat</th>
              <th>Movie name</th>
              <th>Fullname</th>
              <th>Created at</th>
              <th>Updated at</th>
              <th> Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book) => {
              return (
                <tr key={book.id}>
                  <td>{book.attributes.cinema.data.attributes.name}</td>

                  <td>{book.attributes.cinema_seat.data.attributes.seat}</td>
                  <td>{book.attributes.movie.data.attributes.title}</td>
                  <td>
                    {
                      book.attributes.users_permissions_user.data.attributes
                        .firstname
                    }{" "}
                    {
                      book.attributes.users_permissions_user.data.attributes
                        .lastname
                    }
                  </td>
                  <td>
                    {moment(book.attributes.created_at).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </td>

                  <td>
                    {moment(book.attributes.updated_at).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </td>

                  <th>
                    <div className="space-x-3">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-success btn-xs"
                        onClick={() => getSelected(book)}
                      >
                        Edit
                      </label>
                      <label
                        htmlFor="my-modal-4"
                        className="btn btn-error btn-xs"
                        onClick={() => getSelected(book)}
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

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit movie {}</h3>
          <div className="py-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Cinema</span>
              </label>
              <label className="input-group">
                <span>
                  <RiMovie2Fill />
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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Cinema seat</span>
              </label>
              <label className="input-group">
                <span>
                  <MdAirlineSeatReclineNormal />
                </span>
                <select
                  defaultValue={seatId}
                  onChange={(e) => setSeatId(e.target.value)}
                  className="select select-bordered max-w-lg"
                >
                  <option disabled>Pick a cinema</option>
                  {cinemaSeat.map((cin) => (
                    <option key={cin.id} value={cin.id}>
                      {cin.attributes.seat}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Movie</span>
              </label>
              <label className="input-group">
                <span>
                  <BiMoviePlay />
                </span>
                <select
                  defaultValue={movieId}
                  onChange={(e) => setMovieId(e.target.value)}
                  className="select select-bordered max-w-lg"
                >
                  <option disabled>Pick a cinema</option>
                  {movies.map((cin) => (
                    <option key={cin.id} value={cin.id}>
                      {cin.attributes.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex justify-end mt-3">
              <button className="btn btn-success" onClick={updateBooking}>
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
            Are you sure you want to delete ?
          </h3>
          <div className="py-4">
            <button className="btn btn-error" onClick={deleteBooking}>
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

export default CinemaBooking;
