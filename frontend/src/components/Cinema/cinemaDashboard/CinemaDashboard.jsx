import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { API, TOKEN } from "../../environment/constant";
import jwt_decode from "jwt-decode";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function CinemaDashboard() {
  const [movies, setMovies] = useState(0);
  const [snacks, setSnacks] = useState(0);
  const [loading, setLoading] = useState(false);
  const cinemaID = useRef();
  const [cinemaName, setCinemaName] = useState("");
  const [bookings, setBooking] = useState(0);
  const navigate = useNavigate();

  const token = localStorage.getItem("jwt");
  let decoded = jwt_decode(token);
  let ID = decoded.id;

  // console.log(ID)

  const getUser = async () => {
    await axios
      .get(`${API}/users/${ID}?populate=*`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((data) => {
        // console.log(data.data?.cinema.id);
        if(data.data.role.id !== 5){
          navigate('/home', {replace: true})
        }
        cinemaID.current = data.data?.cinema.id;
        getCinemaMovies();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCinemaMovies = async () => {
    setLoading(true);
    // console.log(cinemaID.current);
    await axios
      .get(`${API}/cinemas/${cinemaID.current}?populate=*`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((cinema) => {
        // console.log(cinema.data.data.attributes);
        setMovies(cinema.data.data.attributes.movies.data.length);
        setCinemaName(cinema.data.data.attributes.name);
        setBooking(cinema.data.data.attributes.booking_cinemas.data.length);
        setSnacks(cinema.data.data.attributes.cinema_snacks.data.length);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="flex mt-24 mb-16 ">
        <h1 className="flex-1 font-bold text-4xl">
          {cinemaName.toUpperCase()}
        </h1>
        <div className="flex justify-end">
          <label htmlFor="my-modal-10" className="btn btn-primary glass ">
            Add seats
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
        <div className="stats shadow-xl bg-base-300">
          <div className="stat">
            {loading ? (
              <progress className="progress progress-primary mb-3 w-full"></progress>
            ) : (
              ""
            )}
            <div className="stat-title text-3xl mb-3 font-bold">
              Number of movies
            </div>
            <div className="flex">
              <div className="stat-value flex-1 text-blue-400">{movies}</div>
              <button
                className="btn btn-ghost glass"
                onClick={() => navigate("/cinema/mov", { replace: true })}
              >
                <IoChevronForwardCircleOutline
                  className="cursor-pointer"
                  style={{ fontSize: "2.5rem" }}
                />
                More info.
              </button>
            </div>
          </div>
        </div>

        <div className="stats shadow-xl bg-base-300">
          <div className="stat">
            {loading ? (
              <progress className="progress progress-primary mb-3 w-full"></progress>
            ) : (
              ""
            )}
            <div className="stat-title text-3xl mb-3 font-bold">
              Number of snacks
            </div>
            <div className="flex">
              <div className="stat-value flex-1 text-blue-400">{snacks}</div>
              <button
                className="btn btn-ghost glass"
                onClick={() => navigate("/cinema/snacks", { replace: true })}
              >
                <IoChevronForwardCircleOutline
                  className="cursor-pointer"
                  style={{ fontSize: "2.5rem" }}
                />
                More info.
              </button>
            </div>
          </div>
        </div>

        <div className="stats shadow-xl bg-base-300">
          <div className="stat">
            {loading ? (
              <progress className="progress progress-primary mb-3 w-full"></progress>
            ) : (
              ""
            )}
            <div className="stat-title text-3xl mb-3 font-bold">
              Number of booking
            </div>
            <div className="flex">
              <div className="stat-value flex-1 text-blue-400">{bookings}</div>
              <button
                className="btn btn-ghost glass"
                onClick={() => navigate("/cinema/stats", { replace: true })}
              >
                <IoChevronForwardCircleOutline
                  className="cursor-pointer"
                  style={{ fontSize: "2.5rem" }}
                />
                More info.
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add seats */}
      <input type="checkbox" id="my-modal-10" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-10"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Add seat</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-10" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinemaDashboard;
