import axios from "axios";
import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { API, TOKEN } from "../environment/constant";
import { RiMovie2Fill } from "react-icons/ri";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { SUCCESS } from "../environment/toast";

function TheatreBooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theatres, setCinemas] = useState([]);
  const [theatreSeat, setTheatreSeat] = useState([]);
  const [shows, setShows] = useState([]);
  const [theatreId, setTheatreId] = useState();
  const [seatId, setSeatId] = useState();
  const [showId, setShowId] = useState();
  const bookId = useRef();

  const getBookings = async () => {
    setLoading(true);
    await axios
      .get(`${API}/booking-theatres?populate=*`, {
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

  const getTheatres = async () => {
    await axios
      .get(`${API}/theatres`, {
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

  const getTheatreSeats = async () => {
    await axios
      .get(`${API}/theatre-seats`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((seats) => {
        // console.log(seats.data.data);
        setTheatreSeat(seats.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getShows = async () => {
    await axios
      .get(`${API}/shows`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((shows) => {
        // console.log(shows.data.data);
        setShows(shows.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSelected = (data) => {
    console.log(data.attributes.theatre.data.id);
    setTheatreId(data.attributes.theatre.data.id);
    setSeatId(data.attributes.theatre_seat.data.id);
    setShowId(data.attributes.show.data.id);
    bookId.current = data.id;

  };

  const updateBooking = async () => {
      setLoading(true);
    const data = {
      data: {
        theatre: parseInt(theatreId),
        cinema_seat: parseInt(seatId),
        movie: parseInt(showId),
      },
    };

    console.log(data);

    await axios
      .put(`${API}/booking-theatres/${bookId.current}?populate=*`, data, {
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
      .delete(`${API}/booking-theatres/${bookId.current}`,{
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
    getTheatres();
    getTheatreSeats();
    getShows();
  }, []);
  return (
    <div className="min-h-screen mt-24 overflow-x-scroll">
      <ToastContainer />
      <h1 className="text-center font-bold text-3xl mb-4">Theatre booking</h1>
      <div className="overflow-x-auto w-full">
        {loading ? (
          <progress className="progress progress-primary w-full"></progress>
        ) : (
          ""
        )}
        <table className="table w-full z-0">
          <thead>
            <tr>
              <th>Theatre name</th>
              <th>Theatre seat</th>
              <th>Show name</th>
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
                  <td>{book.attributes.theatre.data.attributes.name}</td>

                  <td>{book.attributes.theatre_seat.data.attributes.seat}</td>
                  <td>{book.attributes.show.data.attributes.title}</td>
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
                  defaultValue={theatreId}
                  onChange={(e) => setTheatreId(e.target.value)}
                  className="select select-bordered max-w-lg"
                >
                  <option disabled>Pick a cinema</option>
                  {theatres.map((cin) => (
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
                  {theatreSeat.map((cin) => (
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
                  defaultValue={showId}
                  onChange={(e) => setShowId(e.target.value)}
                  className="select select-bordered max-w-lg"
                >
                  <option disabled>Pick a cinema</option>
                  {shows.map((cin) => (
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

export default TheatreBooking;
