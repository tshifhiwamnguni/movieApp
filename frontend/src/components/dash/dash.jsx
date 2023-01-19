import React, { useRef, useEffect, useState } from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { MdMovie } from "react-icons/md";
import { ImBlocked } from "react-icons/im";
import axios from "axios";
import { API, TOKEN } from "../environment/constant";
import { ERROR } from "../environment/toast";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [countMovies, SetMoviesCount] = useState(0);
  const [countUsers, SetUsersCount] = useState(0);
  const [countBookingCinema, setBookingCinema] = useState(0);
  const [countBookingTheatre, setBookingTheatre] = useState(0);
  const countBlocked = useRef(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${API}/movies`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        SetMoviesCount(res.data.data.length);
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      });

    axios
      .get(`${API}/booking-cinemas`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        setBookingCinema(res.data.data.length);
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      });

    axios
      .get(`${API}/booking-theatres`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        setBookingTheatre(res.data.data.length);
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      });

    axios
      .get(`${API}/users`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        let count = 0;
        for (let index = 0; index < res.data.length; index++) {
          if (res.data[index].blocked === true) {
            count = count + 1;
            countBlocked.current = count;
          }
        }
        SetUsersCount(res.data.length);
      })
      .catch((error) => {
        ERROR(error.response.data.error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [countUsers]);

  return (
    <div className="hero min-h-screen xs:mt-28">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          {loading ? (
            <progress className="progress h-1 progress-primary w-96 loading"></progress>
          ) : (
            ""
          )}
          <div className="card-body">
            <h2 className="card-title">Number of booking for cinemas</h2>
            <div className="flex space-x-2 justify-center">
              <BsFillBookmarkPlusFill style={{ fontSize: "2rem" }} />
              <p className="text-2xl font-bold">{countBookingCinema}</p>
            </div>

            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() =>
                  navigate("/admin/cinemaBooking/", { replace: true })
                }
              >
                More info
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          {loading ? (
            <progress className="progress h-1 progress-primary w-96 loading"></progress>
          ) : (
            ""
          )}
          <div className="card-body">
            <h2 className="card-title">Number of booking for theatres</h2>
            <div className="flex space-x-2 justify-center">
              <BsFillBookmarkPlusFill style={{ fontSize: "2rem" }} />
              <p className="text-2xl font-bold">{countBookingTheatre}</p>
            </div>

            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() =>
                  navigate("/admin/theatreBooking/", { replace: true })
                }
              >
                More info
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          {loading ? (
            <progress className="progress h-1 progress-primary w-96 loading"></progress>
          ) : (
            ""
          )}
          <div className="card-body">
            <h2 className="card-title">Number of users</h2>
            <div className="flex space-x-2 justify-center">
              <HiUsers style={{ fontSize: "2rem" }} />
              <p className="text-2xl font-bold">{countUsers}</p>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/admin/users/", { replace: true })}
              >
                More info
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          {loading ? (
            <progress className="progress h-1 progress-primary w-96 loading"></progress>
          ) : (
            ""
          )}
          <div className="card-body">
            <h2 className="card-title">Number of movies</h2>
            <div className="flex space-x-2 justify-center">
              <MdMovie style={{ fontSize: "2rem" }} />
              <p className="text-2xl font-bold">{countMovies}</p>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/admin/movies", { replace: "true" })}
              >
                More info
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          {loading ? (
            <progress className="progress h-1 progress-primary w-96 loading"></progress>
          ) : (
            ""
          )}
          <div className="card-body">
            <h2 className="card-title">Blocked</h2>
            <div className="flex space-x-2 justify-center">
              <ImBlocked style={{ fontSize: "2rem" }} />
              <p className="text-2xl font-bold">{countBlocked.current}</p>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/admin/users/", { replace: true })}
              >
                More info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
