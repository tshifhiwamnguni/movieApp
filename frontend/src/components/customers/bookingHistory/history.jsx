import React, { Fragment, useEffect, useState } from "react";
import { BiMoviePlay } from "react-icons/bi";
import axios from "axios";
import create from 'zustand'
import Pagination from "../pagination/pagination";
// import "./history.css"

function History() {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewPerPage, setReviewPerPage] = useState(6);
  const [search, setSearch] = useState("");
  console.log(search);

  //   gets bookings data from starpi
  const getBookings = () => {
    axios
      .get(
        "https://strapi-movie-app.onrender.com/api/booking-cinemas?populate=*"
      )
      .then((response) => {
        console.log(response.data.data);
        setBookings(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const lastPageIndex = currentPage * reviewPerPage;
  const firstPageIndex = lastPageIndex - reviewPerPage;
  const currentReview = bookings.slice(firstPageIndex, lastPageIndex);

  // runs whenever the dom is rendered
  useEffect(() => {
    getBookings();
  }, []);

  return (
    <Fragment>
      <div className="mt-8">
        <div className="container flex justify-between flex-wrap mt-16 mb-4 gap-4 w-full">
          {/* Top level part with search input and title */}
          <h1 className="text-4xl text-center xl:text-4xl font-semibold leading-6 text-gray-800 block">
            Booking History
          </h1>
          <form>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname"></label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                  className="input rounded w-full max-w-md border-black border-1"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="container flex justify-center mx-auto">
          {/* center part with cards for booking data */}
          <div className="grid md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-4">
            {bookings
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.attributes.movie.data.attributes.title
                      .toLowerCase()
                      .includes(search);
              })
              .map((item, index) => (
                <>
                  <div
                    className="card w-fit bg-primary text-primary-content p-2"
                    key={item.id}
                  >
                    <div className="card-body">
                      <h2 className="card-title flex justify-start">
                        <BiMoviePlay className="text-4xl" />
                        <span>
                          {item.attributes.movie.data.attributes.title}
                        </span>
                      </h2>
                      <p>
                        Cinema:{" "}
                        <span>
                          {item.attributes.cinema.data.attributes.name}
                        </span>
                      </p>
                      <p>
                        Extras: <span>Feature Combo Blockbuster</span>
                      </p>
                      <h2 className="card-title flex justify-between flex-wrap gap-4">
                        <p>
                          Paid: {item.attributes.movie.data.attributes.price}
                        </p>
                        <span>
                          {new Date(
                            item.attributes.bookingDate
                          ).toLocaleDateString("ven-ZA", {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </h2>
                    </div>
                  </div>
                </>
              ))}

            {/* <div className="card w-11/12 bg-primary text-primary-content mt-16">
          <div className="card-body ">
            <h2 className="card-title flex justify-start ">Past Events</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div> */}
          </div>
        </div>

        <div className="w-full">
          {/* bottom level part with pagination controls */}
          <Pagination
            totalReviews={bookings.length}
            reviewsPerPage={reviewPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>

      {/* <div className="container mt-8">
        <h1 className="text-4xl mx-auto text-center xl:text-4xl font-semibold leading-6 text-gray-800 p-2 block">
          Booking History
        </h1>
        <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname"></label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </form>
      </div> */}

      {/* <div className="container flex justify-center mx-auto">
        <div className="grid md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-4">
          {bookings
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.attributes.movie.data.attributes.title
                    .toLowerCase()
                    .includes(search);
            })
            .map((item, index) => (
              <>
                <div
                  className="card w-fit bg-primary text-primary-content p-2"
                  key={item.id}
                >
                  <div className="card-body">
                    <h2 className="card-title flex justify-start">
                      <BiMoviePlay className="text-4xl" />
                      <span>{item.attributes.movie.data.attributes.title}</span>
                    </h2>
                    <p>
                      Cinema:{" "}
                      <span>{item.attributes.cinema.data.attributes.name}</span>
                    </p>
                    <p>
                      Extras: <span>Feature Combo Blockbuster</span>
                    </p>
                    <h2 className="card-title flex justify-between flex-wrap gap-4">
                      <p>Paid: {item.attributes.movie.data.attributes.price}</p>
                      <span>
                        {new Date(
                          item.attributes.bookingDate
                        ).toLocaleDateString("ven-ZA", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </h2>
                  </div>
                </div>
              </>
            ))} */}

      {/* <div className="card w-11/12 bg-primary text-primary-content mt-16">
          <div className="card-body ">
            <h2 className="card-title flex justify-start ">Past Events</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* <Pagination
        totalReviews={bookings.length}
        reviewsPerPage={reviewPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      /> */}
    </Fragment>
  );
}

export default History;
