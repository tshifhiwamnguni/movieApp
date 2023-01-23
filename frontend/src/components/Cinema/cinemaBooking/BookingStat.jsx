import React, { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import jwt_decode from "jwt-decode";
import { API, TOKEN } from "../../environment/constant";
import axios from "axios";
import moment from "moment";

function BookingStat() {
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const cinemaID = useRef();

  const token = localStorage.getItem("jwt");
  let decoded = jwt_decode(token);
  let ID = decoded.id;

  // console.log(ID)

  const getUser = async () => {
    await axios
      .get(`${API}/users/${ID}?populate=cinema`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        // console.log(data.data);
        cinemaID.current = data.data?.cinema.id;
        getBooking();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBooking = async () => {
    await axios
      .get(
        `${API}/booking-cinemas?populate=*&filters[cinema]=${cinemaID.current}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((b) => {
        console.log(b.data.data);
        setBookings(b.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
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
                <tr>
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
                  <td>{book.attributes.movie.data.attributes.title}</td>
                  <td>{book.attributes.cinema_seat.data.attributes.seat}</td>
                  <td>{moment(book.attributes.bookingDate).format('YYYY-MM-DD HH:mm:ss')}</td>
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
                        // onClick={() => selectedEdit(snack)}
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
    </div>
  );
}

export default BookingStat;
