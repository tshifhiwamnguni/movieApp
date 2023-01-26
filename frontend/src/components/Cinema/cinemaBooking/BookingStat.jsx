import React, { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import jwt_decode from "jwt-decode";
import { API, TOKEN } from "../../environment/constant";
import axios from "axios";
import moment from "moment";
import {BsCalendar2Date} from 'react-icons/bs'
import {MdAirlineSeatReclineExtra} from 'react-icons/md'
import { useNavigate } from "react-router-dom";

function BookingStat() {
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const cinemaID = useRef();
  const [bookingDate, setBookingDate] = useState('');
  const [seat, setSeat] = useState('');
  const [cinemaSeats, setCinemaSeat] = useState([]);
  const bookId = useRef();

  const navigate = useNavigate(); 
  const token = localStorage.getItem("jwt");
  let decoded = jwt_decode(token);
  let ID = decoded.id;

  // get and set selected data to the variables
  function selectedEdit(books) {
    console.log(books)
    setBookingDate(books.bookingDate);
    setSeat(books.attributes?.cinema_seat?.data?.attributes?.seat)
    bookId.current = books.id;
    console.log('ID from press' + bookId.current)
  }

  const updateBooking = () =>{
   setLoading(true);

    const bookingData = {
      data:{
        bookingDate: bookingDate,
        cinema_seat: parseInt(seat)
      }
    }

    console.log(bookingData);
    console.log('id ' + bookId.current);

    let flag = false;
    
    bookings.forEach(element => {
      // console.log(element);
      if (element.attributes.cinema_seat?.data?.attributes?.seat !== seat && element.bookingDate?.substr(1,16) !== bookingDate) {
        console.log('update');
        flag = true;
      }else{
        flag= false;
        console.log('donot update')
      }

      if(flag){
        axios.put(`${API}/booking-cinemas/${bookId.current}?populate=*`, bookingData,
        {
          headers:{
            Authorization: `Bearer ${TOKEN}`
          }
        }).then((data)=>{
          console.log(data.data);
          getBooking();
        }).catch((err)=>{
          console.log(err)
        }).finally(()=>{
          setLoading(false);
          getBooking();
        })
      }
    });

    // console.log(bookingData)
  }

  // get cinema seats
  const getCinemaSeats = async() =>{
    setLoading(true);
    await axios
      .get(
        `${API}/cinema-seats?populate=*&filters[cinema]=${cinemaID.current}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((b) => {
        console.log(b.data.data);
        setCinemaSeat(b.data.data);
      })
      .catch((err) => {
        console.log(err);
      }).finally(()=>{
        setLoading(false)
      })
  }

// get a user
  const getUser = async () => {
    await axios
      .get(`${API}/users/${ID}?populate=cinema`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        // console.log(data.data);
        if (data.data.role.id !== 6) {
          navigate("/home", { replace: true });
        }
        cinemaID.current = data.data?.cinema.id;
        getBooking();
        getCinemaSeats();
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
                  <td>{book.attributes.movie.data.attributes.title}</td>
                  <td>{book.attributes?.cinema_seat?.data?.attributes?.seat}</td>
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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Cinema seat</span>
              </label>
              <label className="input-group">
                <span>
                  <MdAirlineSeatReclineExtra/>
                </span>
                <select
                  onClick={(e) => setSeat(e.target.value)}
                  className="select select-info w-full max-w-xs"
                >
                  <option disabled selected>
                    Select snack size
                  </option>
                  {cinemaSeats.map((seats) => {
                    return <option key={seats.id} value={seats.id}>{seats.attributes.seat}</option>;
                  })}
                </select>
              </label>
            </div>

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

export default BookingStat;
