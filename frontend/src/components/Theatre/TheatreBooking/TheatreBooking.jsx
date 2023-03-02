import React, { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import jwt_decode from "jwt-decode";
import { API, TOKEN } from "../../environment/constant";
import axios from "axios";
import moment from "moment";
import { BsCalendar2Date } from "react-icons/bs";
import { getUser } from "../../../services/theatre.service";

function BookingStatTheatre() {
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  // const theatreID = useRef();
  const [theatreID, setTheatreID] = useState()
  const [bookingDate, setBookingDate] = useState("");
  const bookId = useRef();
  const [pageCount, setPageCount] = useState();
  const [page, setPage] = useState(1);

  const token = localStorage.getItem("jwt");
  let decoded = jwt_decode(token);
  let ID = decoded.id;

  // get and set selected data to the variables
  function selectedEdit(books) {
    setBookingDate(books.bookingDate);
    bookId.current = books.id;
  }

  const updateBooking = () => {
    setLoading(true);

    const bookingData = {
      data: {
        bookingDate: bookingDate,
      },
    };

    axios
      .put(`${API}/booking-theatres/${bookId.current}`, bookingData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        getBooking();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        getBooking();
      });

    // console.log(bookingData)
  };

  // get a user
  const getUsers = async () => {
    setLoading(true);
    await getUser(ID)
      .then((data) => {
        // console.log(data);
        setTheatreID(data.data.theatre.id)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getBooking = async () => {
    setLoading(true);
    await axios
      .get(
        `${API}/booking-theatres?populate=*&filters[theatre]=${theatreID}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((b) => {
        // console.log(b.data.data);
        setBookings(b.data.data);
        setPageCount(b.data.meta.pagination.pageCount);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
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
    if (theatreID === null) {
      getUsers();
      getBooking();
    }else if(theatreID !== null){
      getBooking();
    }
  }, [page, theatreID]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="min-h-screen mt-24 overflow-x-scroll">
      <ToastContainer />

      <h1 className="text-center font-bold text-3xl mb-4">Booking</h1>
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
              <th>Customer Name</th>
              <th>Movie</th>
              <th>Total Cost</th>
              <th>Seat</th>
              <th>Date</th>
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
                  <td>
                    {!loading ? (
                      <div className="flex items-center space-x-3">
                        <div className="avatar placeholder">
                          <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
                            <span className="text-3xl">
                              {book.attributes.users_permissions_user.data.attributes.firstname
                                ?.slice(0, 1)
                                ?.toUpperCase()}
                            </span>
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
                    {book.attributes.users_permissions_user.data.attributes
                      .firstname +
                      " " +
                      book.attributes.users_permissions_user.data.attributes
                        .lastname}
                  </td>
                  <td>{book.attributes.show.data.attributes.title}</td>
                  <td>R{book.attributes.totalprice}</td>
                  <td>{book.attributes?.theatre_seat}</td>
                  <td>
                    {moment(book.attributes.bookingDate).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </td>
                  <td>
                    {moment(book.attributes.createdAt).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </td>
                  <td>
                    {moment(book.attributes.updatedAt).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </td>
                  <th>
                    <div className="space-x-3">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-success btn-xs"
                        onClick={() => selectedEdit(book)}
                      >
                        Edit
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
          className="btn btn-ghost glass"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-ghost glass"
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
          <h3 className="text-lg font-bold">Edit booking</h3>
          <div className="py-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Movie date</span>
              </label>
              <label className="input-group">
                <span>
                  <BsCalendar2Date />
                </span>
                <input
                  type="datetime-local"
                  onChange={(e) => setBookingDate(e.target.value)}
                  value={bookingDate}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Cinema seat</span>
              </label>
              <label className="input-group">
                <span>
                  <MdAirlineSeatReclineExtra />
                </span>
                <select
                  onClick={(e) => setSeat(e.target.value)}
                  className="select select-info w-full max-w-xs"
                >
                  <option disabled selected>
                    Select snack size
                  </option>
                  {cinemaSeats.map((seats) => {
                    return (
                      <option key={seats.id} value={seats.id}>
                        {seats.attributes.seat}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div> */}

            <div className="flex justify-end mt-3">
              <label
                className="btn btn-success"
                htmlFor="my-modal-3"
                onClick={updateBooking}
              >
                Update
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingStatTheatre;
