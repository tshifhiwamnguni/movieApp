import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { API, TOKEN } from "../../environment/constant";
import jwt_decode from "jwt-decode";

function CinemaDashboard() {
  const [movies, setMovies] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const cinemaID = useRef();
  const [cinemaName, setCinemaName] = useState('');

  const token = localStorage.getItem("jwt");
  let decoded = jwt_decode(token);
  let ID = decoded.id;

  // console.log(ID)

  const getUser = async()=>{
    await axios.get(`${API}/users/${ID}?populate=*`,{
      headers:{
        Authorization: `Bearer ${TOKEN}`
      }
    }).then((data)=>{
      // console.log(data.data?.cinema.id);
      cinemaID.current = data.data?.cinema.id;
      getCinemaMovies();
    }).catch((err)=>{
      console.log(err);
    })
  }

  const getCinemaMovies = async () => {
    setLoading(true);
    console.log(cinemaID.current)
    await axios
      .get(`${API}/cinemas/${cinemaID.current}?populate=*`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((cinema) => {
        console.log(cinema.data.data.attributes.name)
        setMovies(cinema.data.data.attributes.movies.data.length);
        setCinemaName(cinema.data.data.attributes.name)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const getSnacks = async () => {
    setLoading(true);
    await axios
      .get(`${API}/cinema-snacks?populate=*`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((movie) => {
        // console.log(movie.data.data.length);
        setSnacks(movie.data.data.length);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getUser();
    getSnacks();
  }, []);
  return (
    <div className="min-h-screen">
      <h1 className="mt-24 mb-16 text-center font-bold text-4xl">{cinemaName.toUpperCase()}</h1>
  
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
        <div className="stats shadow-xl bg-base-200">
          <div className="stat">
            <div className="stat-title text-3xl mb-3 font-bold">
              Number of movies
            </div>
            <div className="stat-value text-blue-400">{movies}</div>
          </div>
        </div>

        <div className="stats shadow-xl bg-base-200">
          <div className="stat">
            <div className="stat-title text-3xl mb-3 font-bold">
              Number of snacks
            </div>
            <div className="stat-value text-blue-400">{snacks}</div>
          </div>
        </div>

        <div className="stats shadow-xl bg-base-200">
          <div className="stat">
            <div className="stat-title text-3xl mb-3 font-bold">
              Number of booking
            </div>
            <div className="stat-value text-blue-400">89,400</div>
          </div>
        </div>
      </div>
      </div>

  );
}

export default CinemaDashboard;
