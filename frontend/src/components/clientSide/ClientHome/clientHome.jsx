import React, { useEffect , useState} from "react";
import axios from "axios";
import "./ClientHome.css";




function ClientHome() {


const [movies, setMovies] =useState([])

  useEffect(() => {
    axios
      .get("https://strapi-movie-app.onrender.com/api/movies")
      .then((response) => {
        // Handle success.
        console.log(response);

      })
      .catch((error) => {
        // Handle error.
      });
  }, []);

  const _movies = [1, 2, 3, 5, 45, 67];
  return (
    <>
      <div className="mt-24">
        <div>
          <h1 className="text-center text-5xl font-bold mb-4">Movies</h1>
          <div className="container">
            {_movies.map((element) => {
              return (
                <div key={element} className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://placeimg.com/400/225/arch"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        </div>
        <div>
          <h1 className="text-center text-5xl font-bold mb-4">plays</h1>
          <div className="container">
            {_movies.map((element) => {
              return (
                <div key={element} className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://placeimg.com/400/225/arch"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientHome;