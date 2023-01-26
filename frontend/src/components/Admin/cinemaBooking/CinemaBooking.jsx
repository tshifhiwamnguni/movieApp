import axios from "axios";
import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { API, TOKEN } from "../../environment/constant";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'

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
        if (data.data.role.id !== 6) {
          navigate("/home", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const getBookings = async () => {
    setLoading(true);
    await axios
      .get(`${API}/booking-cinemas?populate=*`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((booking) => {
        // console.log(booking.data);
        setBookings(booking.data.data);
        setPageCount(booking.data.meta.pagination.pageCount);
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


  useEffect(() => {
    getUser();
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
              {/* <th> Action</th> */}
            </tr>
          </thead>
          <tbody>
            {bookings.map((book) => {
              return (
                <tr key={book.id}>
                  <td>{book.attributes.cinema.data.attributes.name}</td>

                  <td>{book.attributes.cinema_seat.data.attributes.seat}</td>
                  <td>{book?.attributes?.movie.data.attributes?.title}</td>
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

                  {/* <th>
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
                  </th> */}
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

    </div>
  );
}

export default CinemaBooking;
