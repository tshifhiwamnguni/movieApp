import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./ClientHome.css";
import ReactPlayer from "react-player";
import Iframe from "react-iframe";
function ClientHome() {
  const [movies, setMovies] = useState([]);
const iframeRef = useRef()
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

  const _movies = [1, 2, 3, 5, 45, 67];

  function select(index) {
    setModelData(movies[index - 1]);
    console.log(index - 1);
  }

  function stop(){
        console.log(iframeRef.current.contentWindow.frames);
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  }
  return (
    <>
      <div className="mt-24">
        <div>
          <h1 className="text-center text-5xl font-bold mb-4">Movies</h1>
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
                      <button className="btn btn-primary">book now</button>
                      <label
                        onClick={() => {
                          select(element.id);
                        }}
                        htmlFor="my-modal-5"
                        className="btn"
                      >
                        open modal
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

                          <iframe
                          ref={iframeRef}
                              width="966"
                              height="543"
                              src="https://www.youtube.com/embed/d9MyW72ELq0"
                              title="Avatar: The Way of Water | Official Trailer"
                              frameborder="0"
                              
                            //   allow="autoplay"
                            ></iframe>




                          <div className="modal-action">
                            <label onClick={stop} htmlFor="my-modal-5" className="btn">
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
        {/* <div>
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
        </div> */}
      </div>
    </>
  );
}

export default ClientHome;
