


import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import './CinemaList.css'

function CinemaList() {

  const [movies, setMovies] = useState([]);

  const initData = {
    id: 1,
    attributes: {
      title: "Avatar: The Lost city",
      duration: 102.2,
      description:
        "It is a movie where they lost their city it tough and rough",
      createdAt: "2023-01-16T17:44:29.314Z",
      updatedAt: "2023-01-17T06:05:41.504Z",
    },
  };
  const [modelData, setModelData] = useState(initData);
  useEffect(() => {
    console.log('on');
    axios
      .get("https://strapi-movie-app.onrender.com/api/movies")
      .then((response) => {
        // Handle success.
        console.log(response.data.data);
        setMovies(response.data.data);
      })
      .catch((error) => {
        // Handle error.
      });
  }, []);



  function select(index) {
    setModelData(movies[index - 1]);
    console.log(index - 1);
  }

  return (
    <div className='mt-24 '>

<div>
          <h1 className="text-center text-5xl font-bold mb-4">Cinema list</h1>
          <div className="container">
            {movies.map((element) => {
              return (
                <div
                  key={element.id}
                  className="card w-96 bg-base-100 shadow-xl"
                >
                  <figure className="px-10 pt-10">
                    <img
                      src="https://placeimg.com/400/225/arch"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{element.attributes.title}</h2>
                    <p>{element.attributes.description}</p>

                    <div className="card-actions">
                      <button className="btn btn-primary">Select</button>
                      <label
                        onClick={() => {
                          select(element.id);
                        }}
                        htmlFor="my-modal-5"
                        className="btn"
                      >
                       view details
                      </label>

                      {/* Put this part before </body> tag */}
                      <input
                        type="checkbox"
                        id="my-modal-5"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                          <h3 className="font-bold text-lg">
                            {modelData.attributes.title}
                          </h3>



                          <div className="modal-action">
                            <label  htmlFor="my-modal-5" className="btn">
                              close
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        </div>
    </div>
  )
}

export default CinemaList